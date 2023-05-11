import React from 'react';

const ProductCard = (props) => {
  return (
    <figure className="product">
      <img src={props.img} alt={props.title} />
      <figcaption>
        <h6 className='mb-4'>{props.title}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <div className='fw-5'>от 27 200 ₽</div>
          <button type='button' className='btn-1 fw-6'>Купить</button>
        </div>
      </figcaption>
    </figure>
  );
};

export default ProductCard;