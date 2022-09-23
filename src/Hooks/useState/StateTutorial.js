import React from 'react';
import { useState } from 'react';

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState('Kawsar');

  let handleInput = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeHolder="Enter Something..." onChange={handleInput} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
