import React from 'react';

const ProductCard = (props) => {
  return (
    <figure className="product">
      <img src={props.img} alt={props.title} />
      <figcaption>
        <h6 className='fw-4 mb-2 mb-sm-4'>{props.title}</h6>
        <div className="d-sm-flex justify-content-between align-items-center">
          <div className='fw-5'>от 27 200 ₽</div>
          <button type='button' className='btn-1 fw-6 mt-2 mt-sm-0'>Купить</button>
        </div>
      </figcaption>
    </figure>
  );
};

export default ProductCard;