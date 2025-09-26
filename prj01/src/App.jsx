
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  const [mapaSelecionado, setMapaSelecionado] = useState(null);
  const [musicaSelecionada, setMusicaSelecionada] = useState(null);
  
  const navigate = useNavigate();

  const handleMapSelect = (mapa) => {
    setMapaSelecionado(mapa.image);
    setMusicaSelecionada(mapa.music);
    navigate('/jogo');
  };

  return (
    <div className="App">
      <Outlet context={{ 
          onMapSelect: handleMapSelect, 
          mapa: mapaSelecionado,
          musica: musicaSelecionada,
        }} />
    </div>
  );
}

export default App;
