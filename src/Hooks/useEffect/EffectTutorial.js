import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EffectTutorial() {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
      setData(res.data[0].email);
      console.log('API was Called');
    });
  }, [count]);

  return (
    <div>
      Hello World {data}
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default EffectTutorial;
