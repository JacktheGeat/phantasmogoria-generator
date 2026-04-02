import React from 'react';
import './App.css'


const Effect = ({ id, effectClass, onRemove }) => {
  return (
    <div style={{ border: '1px dotted blue', padding: '10px', margin: '10px' }}>
      <h3>{effectClass}</h3>
      <button class='remove' onClick={() => onRemove(id)}>-</button>
    </div>
  );
};

export default Effect;