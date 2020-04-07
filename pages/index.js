import Head from "next/head";
import Header from "../Components/Header";
import MainContent from "../Components/MainContent";
import Footer from "../Components/Footer";
import { Fragment } from "react";

const Home = () => (
  <Fragment>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      />
    </Head>
    <div className="root">
      <Header />
      <MainContent />
    </div>
    <Footer />
  </Fragment>
);

export default Home;
