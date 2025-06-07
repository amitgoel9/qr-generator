import React from 'react';
import QRGenerator from './components/QRGenerator';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <QRGenerator />
    </div>
  );
}

export default App;