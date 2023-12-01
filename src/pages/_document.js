import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <body className={'bg-neutral-50'}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
