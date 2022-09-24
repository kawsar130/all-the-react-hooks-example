import React from 'react';
import { useEffect } from 'react';

function Child({ returnComment }) {
  useEffect(() => {
    console.log('Function was called');
  }, [returnComment]);
  return <div>{returnComment('Kawsar')}</div>;
}

export default Child;
