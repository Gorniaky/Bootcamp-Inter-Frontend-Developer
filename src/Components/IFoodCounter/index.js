import React, { useState } from 'react';
import './IFoodCounter.css';

export default function IFoodCounter() {
  const [value, setValue] = useState(1);
  const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active')

  function down() {
    if (!value) return;

    setValue(value - 1)

    if (value === 1) setButtonStyle('counter-button-minus-desactive');
  }

  function up() {
    setValue(value + 1)
    setButtonStyle('counter-button-plus-active')
  }

  return (
    <div className="conterx-wrapper">
      <button className={buttonStyle} onClick={down}>-</button>
      <p>{value}</p>
      <button className="counter-button-plus-active" onClick={up}>+</button>
    </div>
  )
}