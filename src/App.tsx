import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavBarAndFooter/Navbar";
import { Footer } from "./layouts/NavBarAndFooter/Footer";
import { HomePage } from "./layouts/HomePage/HomePage";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooks";

export const App = () => {
  return (
    <div>
      <Navbar />
      {/* <HomePage /> */}
      <SearchBooksPage />
      <Footer />
    </div>
  );
};
