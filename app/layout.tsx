"use client";

import Link from "next/link";
import { Nunito } from "@next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Header from "./components/header";
import Footer from "./components/footer";

import "./globals.css";

config.autoAddCss = false;

type Props = {
  children: React.ReactNode;
};

const nunito = Nunito({ subsets: ["latin"] });

const RootLayout = ({ children }: Props) => {
  return (
    <html className={nunito.className}>
      <head />
      <body className="max-w-screen-lg mt-0 mx-auto pt-4 px-4 pb-0">
        <main className="flex flex-col gap-6 bg-gray-50 h-[98vh] pt-6 rounded-lg shadow-lg shadow-slate-300">
          <Header />
          <article className="h-[75vh]">{children}</article>
          <Footer />
        </main>
      </body>
    </html>
  );
};
export default RootLayout;
