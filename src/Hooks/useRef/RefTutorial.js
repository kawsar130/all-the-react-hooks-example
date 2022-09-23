import React, { useRef } from 'react';

function RefTutorial() {
  const inputRef = useRef(null);
  const divRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
    console.log(inputRef.current.placeholder);
    console.log(inputRef.current.type);
    // inputRef.current.focus();
    inputRef.current.value = ''; // Clearing the input field after clicking the button
    console.log(divRef.current);
  };

  return (
    <div ref={divRef} class="division" type="text">
      <h1>Kawsar</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;
