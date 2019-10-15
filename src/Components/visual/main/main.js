import React from 'react';
import '../main/main.css';
const Main = () => {
  function toggleCandela() {
    let CandelaElement = document.getElementById('CandelaDiv');
    CandelaElement.classList.toggle('isOpen');
  }
  return (
    <div className="biggestDiv" id="biggestDiv">
      <button onClick={() => toggleCandela()}>hi</button>
      <div className="CandelaDiv" id="CandelaDiv">
        <p>Candela</p>
      </div>
      <div className="SarrDiv" id="SarrDiv">
        <p>Sarrabayrouse</p>
      </div>
    </div>
  );
};

export default Main;
