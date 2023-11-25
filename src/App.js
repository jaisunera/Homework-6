import React, { useState } from "react";
import Home from "./Home";
import TicTacToe from "./TicTacToe";
import KittenAPI from "./KittenAPI";
import "./App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'ticTacToe':
        return <TicTacToe />;
      case 'kittenAPI':
        return <KittenAPI />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <div className="top-buttons-container">
        <button className="top-buttons" onClick={() => setCurrentPage('home')}>Home</button>
        <button className="top-buttons" onClick={() => setCurrentPage('ticTacToe')}>Tic Tac Toe</button>
        <button className="top-buttons" onClick={() => setCurrentPage('kittenAPI')}>Kitten API</button>
      </div>
      {renderPage()}
    </div>
  );
}
