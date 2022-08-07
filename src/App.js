import React, { useState } from 'react';
import Categories from './Categories';
import items from './data';
import Menu from './Menu';
function App() {
  const uniqueCategories=["all",...new Set(items.map(item=>item.category))]
  const [menuItem,setMenuItem]=useState(items)
 //const [categories,setCategories]=useState(uniqueCategories)
 
 const filterItem=(category)=>{
  if(category==="all"){
    return setMenuItem(items);
  }
    const newItem=items.filter((item)=>
      item.category===category);
      setMenuItem(newItem)
 }

  return <main className="fullMenu">
    <section className='menu section'>
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
    </section>
    <Categories filterItem={filterItem} uniqueCategories={uniqueCategories}/>
    <Menu items={menuItem}/>
    <p className='copyright'>Developed By <a href="https://fb.com/ribpy">Riaz Bappy</a></p>
  </main>;
}

export default App;
