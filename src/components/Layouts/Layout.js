import React, { Fragment } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <br />
      <br />
      <br />

      <Navigation />
      {children}
      <Footer />
    </Fragment>
  );
}
