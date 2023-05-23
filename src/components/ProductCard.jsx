import React from 'react';
import {Link} from 'react-router-dom';

const ProductCard = (props) => {
  return (
    <figure className="product">
      <Link to='/catalog/category/product'><img src={props.img} alt={props.title} /></Link>
      <figcaption>
        <h6 className='fw-4 mb-2 mb-sm-4'><Link to='/catalog/category/product'>{props.title}</Link></h6>
        <div className="product-bottom">
          <div className='fw-5'>от 27 200 ₽</div>
          <button type='button' className='btn-1 fw-6 mt-2 mt-sm-0'>Купить</button>
        </div>
      </figcaption>
    </figure>
  );
};

export default ProductCard;