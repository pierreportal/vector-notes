import React from 'react';
import { Context } from './Context';
import { TopBar } from './components/TopBar';
import { Footer } from './components/Footer';
import { MainContent } from './components/MainContent';

function App() {
  return (
    <Context>
      <TopBar />
      <MainContent />
      <Footer />
    </Context>
  );
}

export default App;
