import React from 'react';
import Quotes from './components/Quotes';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Quotes />
      <Footer />   
    </div>
  );
}
export default App;