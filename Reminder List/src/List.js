import React from 'react';

const List = ({ data, setItem, setCount, count }) => {

  // const [item, removeIndividual] = React.useState(data)

  const removeItem = (id) => {
    let newData = data.filter((item) => {

      return item.id !== id;

    })
    setItem(newData);

    setTimeout(() => {
      setCount((previousState) => {
        return previousState + 1;
      })

    }, 2000);
  }
  // console.log(removeIndividual());
  return (
    <>
      {/* {item && item.map((list) => { */}
      {data && data.map((list) => {
        const { id, name, image, age } = list;

        return (
          <section key={id}>
            <div className="image">
              <img src={image} alt="" />
            </div>
            <div className="name-age">
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
            <button className='list-btn' onClick={() => removeItem(id)}>Remove</button>
          </section>
        );
      })}
    </>
  );

};

export default List;
