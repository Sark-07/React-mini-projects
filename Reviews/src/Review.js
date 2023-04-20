import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [dataIndex, setDataIndex] = useState(0);

  const random = () => {
    setDataIndex(() => {
      return (Math.floor(Math.random() * people.length))

    })
  }
  const left = () => {
    if (dataIndex === 0) {
      setDataIndex(() => { return people.length - 1 })
    } else setDataIndex(() => { return dataIndex - 1 });
  }
  const right = () => {
    if (dataIndex === people.length - 1) {
      setDataIndex(() => { return 0 })
    } else setDataIndex(() => { return dataIndex + 1 });
  }
  return (
    <article>
      <div className="image">
        <FaQuoteRight className='quote' />
        <img src={people[dataIndex].image} alt="" />
      </div>
      <div className="title-info">
        <h4 className='name'>{people[dataIndex].name}</h4>
        <p className='proff'>{people[dataIndex].job}</p>
      </div>
      <div className="text">
        <p>{people[dataIndex].text}</p>
      </div>
      <div className="btns">
        <FaChevronLeft className='arrows' onClick={left} /><FaChevronRight className='arrows' onClick={right} />
      </div>
      <div className="btn">

        <button className='random-btn' onClick={random}>Random</button>
      </div>
    </article>
  );
};

export default Review;
