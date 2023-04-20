import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [question, setQuestion] = useState(data);
  const [refresh, setRefresh] = useState(false);
  const deleteQuestions = () => {
    setQuestion([]);
    setRefresh(!refresh)
  }
  return (
    <main className='body'>
      <section className='container-main'>

        <div className="left">
          <h3>Frequentlty asked questions</h3>
        </div>
        <div className="right">
          {question.map((item) => {
            return <SingleQuestion key={item.id} {...item} />
          })}
          {refresh ? <button className='clear-btn' onClick={() => { setQuestion(data); setRefresh(!refresh) }}>Refresh</button> : <button className='clear-btn' onClick={deleteQuestions}>Clear All</button>}

        </div>
      </section>
    </main>
  );
}

export default App;
