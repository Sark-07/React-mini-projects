import React, { useState } from 'react';
import { data } from './data';
import List from './List';
function App() {

  const [item, setItem] = useState(data)
  const [count, setCount] = useState(0)

  const clearList = () => {
    setItem([]);
    if (item.length > 0) setCount(count + 1);
  }
  return (
    <article className='container'>
      <span>
        <h2 style={{ marginBottom: '0.5em', opacity: '.7', fontFamily: 'poppins' }}>Data rendered: {count} </h2>
      </span>
      <List data={item} setItem={setItem} count={count} setCount={setCount} />
      <button className='btn' onClick={clearList}>Clear</button>
    </article>
  );
}

export default App;