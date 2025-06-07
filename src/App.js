import React from 'react';
import QRGenerator from './components/QRGenerator';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <QRGenerator />
      <Footer />
    </div>
  );
}

export default App;