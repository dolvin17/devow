import "../styles/globals.css";
import localFont from "next/font/local";

import { Inter } from "@next/font/google";

const nextFont = Inter({ subsets: [] });

// Font files can be colocated inside of `pages`
const chromate = localFont({
  src: "../public/Chromate/Chromate-Regular.ttf",
  variable: "--font-inter",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={nextFont.className}>
      <style jsx global>
        {`
          :root {
            --font-chromate: ${chromate.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </main>
  );
}
