import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <link rel="icon" href="/logo.jpg" />

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
