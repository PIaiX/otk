import React from 'react';

const CategoryCard = (props) => {
  return (
    <figure className='category-card'>
      <figcaption>
        <h4 className='fw-5'>{props.title}</h4>
      </figcaption>
      <img src={props.img} alt={props.title} />
    </figure>
  );
};

export default CategoryCard;