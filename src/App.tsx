import React from 'react';
import './App.css';

import { Nav } from './components/nav';
import { Footer } from './components/footer';

const App = (): JSX.Element => {
  return (
    <div className="App min-h-full font-custom">
      <Nav />
      <Footer />
    </div>
  );
};

export default App;
