import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
