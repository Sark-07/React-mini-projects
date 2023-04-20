import React from 'react';
import Tour from './Tour';

const Tours = ({ data, removeTour }) => {


  return (<>
    <section className='container'>
      <h3>Tours</h3>

      {
        data.map((item) => {

          return (<Tour key={item.id} item={item} removeTour={removeTour} />)

        })
      }

    </section>
  </>);
};

export default Tours;
