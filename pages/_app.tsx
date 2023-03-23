import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import NavBar from "../components/NavBar";
import ContactForm from "./Contact";
import Footer from "../components/Footer";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Analytics />
      <ContactForm />
      <Footer />
    </>
  );
}

export default MyApp;
