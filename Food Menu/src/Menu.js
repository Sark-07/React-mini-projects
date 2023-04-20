import React from 'react';

const Menu = ({ desc, img, price, category, title }) => {
  return (
    <div className="item">
      <div className="left-img">
        <img src={img} alt="" />
      </div>
      <div className="right-info">
        <div className="title-price">
          <h4>{title}</h4>
          <p>${price}</p>
        </div>
        <p>{desc}</p>
        <p>Category: <span style={{ color: 'crimson', textTransform: 'capitalize' }}>{category}</span></p>
      </div>
    </div>
  );
};

export default Menu;
