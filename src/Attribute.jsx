import React from 'react';
import './App.css'


const Attribute = ({ id, title, onRemove }) => {
  return (
    <div style={{ border: '1px dotted blue', padding: '10px', margin: '10px' }}>
      <h3>{title}</h3>
      <button class='remove' onClick={() => onRemove(id)}>-</button>
    </div>
  );
};

export default Attribute;