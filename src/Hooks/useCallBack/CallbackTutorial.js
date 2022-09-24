import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import Child from './Child';

export default function CallbackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState('Yo, We are here');

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div>
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1>Toggle</h1>}
    </div>
  );
}
