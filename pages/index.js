import Head from "next/head";
import Navigation from "../components/Navigation";
import Stage from "../components/inicio/Stage";
import Footer from "../components/Footer";
import Cards from "../components/cards/Cards";

export default function Index() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/devowii.png" />
        <title>DEVOW</title>
      </Head>
      <Navigation />
      <Stage />
      <Cards />
      <Footer />
    </>
  );
}
