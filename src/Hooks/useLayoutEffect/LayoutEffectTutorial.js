import React, { useEffect, useLayoutEffect, useRef } from 'react';

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = 'Hello';
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} value="Kawsar" style={{ width: 400 }} />
    </div>
  );
}

export default LayoutEffectTutorial;
