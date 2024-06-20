import React from "react";
import { Context } from "./Context";
import { Footer } from "./components/Footer";
import { MainContent } from "./components/MainContent";
import { TopBar } from "./components/TopBar";


export default function App() {
  return <Context>
    <TopBar />
    <MainContent />
    <Footer />
  </Context>;
}