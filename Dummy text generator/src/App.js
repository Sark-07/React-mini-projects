import React, { useState } from 'react';
import data from './data';
function App() {

  const [pcount, setPcount] = useState(0)
  const [pdata, setPdata] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(pcount) < 1) {
      setPdata(data.slice(0, 1))
    } else if (Number(pcount) > data.length) {
      setPdata(data)
    } else {
      setPdata(data.slice(0, Number(pcount)))
    }
  }

  return (
    <section>
      <div className="haeding">
        <h2>Use this instead of boring lorem ipsum!</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inp">
          <label htmlFor="paragraph">Pragraphs no:</label>
          <input type="number" onChange={(e) => { setPcount(e.target.value) }} />
        </div>
        <button className='btn'>Go</button>
      </form>
      <div className="paragraph">

        {
          pdata.map((items, index) => {
            return <p key={index}>{items}</p>
          })
        }
      </div>
    </section>
  )
}

export default App;
