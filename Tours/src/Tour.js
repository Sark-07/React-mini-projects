import React, { useState } from 'react';
import './style.css';

const Tour = ({ item, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const { id, image, price, info, name } = item;
  return (
    <>
      <article className='single-tour'>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="information">
          <div className="title-price">
            <h4>{name}</h4>
            <p className='tour-price' style={{ fontWeight: 'bold' }}>{price}</p>
          </div>
          <div className="text">
            <p>{readMore ? info : info.substring(0, 200) + '...'}<button onClick={() => setReadMore(!readMore)}>
              {!readMore ? 'Read more' : 'Show less'} </button></p>
          </div>
          <button className='delete-btn' onClick={() => removeTour(id)} >Not interested</button>
        </div>
      </article>


    </>
  );
};

export default Tour;

