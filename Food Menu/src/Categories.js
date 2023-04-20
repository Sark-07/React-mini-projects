import React from 'react';

const Categories = ({ category, filterCategories }) => {
  return (
    <article className='categories'>
      {category.map((types, index) => {
        return <span key={index} className='filter-btn' onClick={() => filterCategories(types)}>{types}</span>
      })}
    </article>
  );
};

export default Categories;
