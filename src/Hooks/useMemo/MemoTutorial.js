import axios from 'axios';
import React from 'react';
import { useState, useEffect, useMemo } from 'react';

function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
      setData(res.data);
    });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = '';
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log('This was computed');
    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div>
      <div>{getLongestName}</div>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {' '}
        Toggle{' '}
      </button>
      {toggle && <h1> Toggle </h1>}
    </div>
  );
}

export default MemoTutorial;
