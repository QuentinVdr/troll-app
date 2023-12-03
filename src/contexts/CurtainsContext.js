import Curtains from '@components/Curtains/Curtains';
import { createContext, useContext, useMemo, useState } from 'react';

const CurtainsContext = createContext({ isOpen: false, updateCurtains: null });

export const CurtainsProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const updateCurtains = (isOpen) => {
    setIsOpen(isOpen);
  };

  const contextValue = useMemo(() => {
    return { isOpen, updateCurtains };
  }, [isOpen]);

  return (
    <CurtainsContext.Provider value={contextValue}>
      <Curtains isOpen={isOpen} updateCurtains={updateCurtains}>
        {children}
      </Curtains>
    </CurtainsContext.Provider>
  );
};

export const useCurtains = () => {
  return useContext(CurtainsContext);
};
