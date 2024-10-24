import React, { useState } from 'react';
import './App.scss'; // Certifique-se de que o caminho está correto

function App() {
  const [showGenie, setShowGenie] = useState(false);

  const toggleGenie = () => {
    setShowGenie(!showGenie);
  };

  return (
    <div className="app-container">
      <h1>Lampada Magica</h1>
      <div className="lamp-container">
        {showGenie ? (
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC43CxkoIcxWTFniIrU4tcr3zR-b0TucMt4g&s" 
            alt="Genie" 
            className="genie" 
          />
        ) : (
          <img 
            src="https://w7.pngwing.com/pngs/825/435/png-transparent-aladdin-s-magic-lamp-genie-the-magic-lamp-jinn-oil-lamp-thumbnail.png" 
            alt="Magic Lamp" 
            className="lamp" 
          />
        )}
      </div>
      <button onClick={toggleGenie}>
        {showGenie ? 'O gênio apareceu ' : 'Toque na lampada'}
      </button>
    </div>
  );
}

export default App;
