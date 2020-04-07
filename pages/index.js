import Head from "next/head";
import Header from "../Components/Header";
import MainContent from "../Components/MainContent";
import Footer from "../Components/Footer";
import { Fragment } from "react";

const Home = () => (
  <Fragment>
    <Head>
      <title>Create Next App</title>
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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
  </Fragment>
);

export default Home;
