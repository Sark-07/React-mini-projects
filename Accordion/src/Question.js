import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand);
  }
  return (
    <article>
      <div className="heading-btn">
        <h4>{title}</h4>
        {expand ? <AiOutlineMinus className='btn' onClick={handleClick} /> : <AiOutlinePlus className='btn' onClick={handleClick} />}
      </div>
      {expand && <p>{info}</p>}
    </article>
  )
};

export default Question;
