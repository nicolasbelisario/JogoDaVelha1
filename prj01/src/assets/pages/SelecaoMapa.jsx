import React from 'react';

import { useOutletContext, Link } from 'react-router-dom';

import './SelecaoMapa.css'; 
import pizzaMap from '../images/PizzaPlace.png';
import townMap from '../images/Town.png';

import pizzaMusic from '../components/Musica/PizzaTheme.mp3';
import townMusic from '../components/Musica/Town.mp3'

const mapas = [
  { 
    id: 'pizza', 
    name: 'Pizzaria', 
    image: pizzaMap,
    music: pizzaMusic,
},
  { 
    id: 'town', 
    name: 'Centro', 
    image: townMap,
    music: townMusic,
}
];

function SelecaoMapa() {
  const { onMapSelect } = useOutletContext();

  return (
    <div className="selecao-container">
      <h1>Escolha um mapa</h1>
      <div className="mapas-grid">
        {mapas.map((mapa) => (
          <div 
            key={mapa.id} 
            className="mapa-card" 
            onClick={() => {
              onMapSelect(mapa);
            }}
          >
            <img src={mapa.image} alt={`Mapa do ${mapa.name}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelecaoMapa;