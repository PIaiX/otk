import React from 'react';
import {Link} from 'react-router-dom';

const CategoryCard = (props) => {
  return (
    <figure className='category-card'>
      <figcaption>
        <h4 className='fw-5'><Link to='/catalog/category' className='stretched-link'>{props.title}</Link></h4>
      </figcaption>
      <img src={props.img} alt={props.title} />
    </figure>
  );
};

export default CategoryCard;