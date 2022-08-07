import React from 'react';

const Categories = ({filterItem,uniqueCategories}) => {
  return <div className='btn-container'>
   {uniqueCategories.map((category,index)=>{
    return <button className='filter-btn' key={index} onClick={()=>filterItem(category)}>
        {category}
    </button>
 } )}
  </div>;
};

export default Categories;
