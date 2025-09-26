import React from 'react';
import { Link } from 'react-router-dom';
import './MenuPrincipal.css';

function MenuPrincipal() {
  return (
    <div className="menu-container">
      <div className="titulo-container">
        <h1 className="menu-titulo">Jogo da velha</h1>
        <h2 className="menu-subtitulo">Club Penguin</h2>
      </div>

      <Link to="/selecao-mapa">
        <button className="menu-botao">
          Jogar
        </button>
      </Link>
    </div>
  );
}

export default MenuPrincipal;