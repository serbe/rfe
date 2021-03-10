import React from 'react';
import './App.css';

// import { TestNavBar } from './components/testnavbar';
import { Nav } from './components/nav';

const App = (): JSX.Element => {
  return (
    <div className="App min-h-screen font-custom">
      <Nav />
      <h1>2021</h1>
    </div>
  );
};

export default App;
