import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

let categories = ["all", ...new Set(items.map((category) => { return category.category }))]
function App() {

  const [item, setItem] = useState(items)

  const filterCategories = (type) => {

    if (type === 'all') {
      setItem(items)
    } else {

      const newItem = items.filter((category) => {
        return category.category === type;
      })
      setItem(newItem)

    }

  }
  console.log(categories);
  return (
    <main>
      <h1>Our Menus</h1>
      <Categories category={categories} filterCategories={filterCategories} />
      <section className='container-main'>
        {item.map((products) => {
          return <Menu key={products.id} {...products} />
        })}
      </section>
    </main>
  );
}

export default App;
