import React from 'react';
import './App.css';

import { TestNavBar } from './components/testnavbar';

const App = (): JSX.Element => {
  return (
    <div className="App min-h-screen font-custom">
      <TestNavBar />
      <h1>2021</h1>
    </div>
  );
};

export default App;
