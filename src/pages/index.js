import { useCurtains } from '@contexts/CurtainsContext';

export default function Home() {
  const { isOpen, updateCurtains } = useCurtains();

  return (
    <main className="mt-20 text-center">
      <div className="align-center flex justify-center">
        <h1 className="w-fit text-4xl font-bold tracking-tight text-gray-900 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] sm:text-6xl">
          Bienvenue dans le cirque
        </h1>
      </div>

      <button
        className="absolute bottom-20 left-1/2 z-10 m-auto -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => updateCurtains(!isOpen)}
      >
        {isOpen ? 'Ferme' : 'Ouvre'}
      </button>
    </main>
  );
}
