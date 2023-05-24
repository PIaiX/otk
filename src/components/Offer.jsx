import React from 'react';
import HumanFull from '../assets/imgs/bg/human-full.png';

const Offer = (props) => {
  return (
    <div className={"offer "+props.className} onClick={props.onClick}>
      <div className="text">
        <h3>Вместе выгоднее</h3>
        <p>Закажите оборудование и&nbsp;получите скидку&nbsp;50% на&nbsp;его установку</p>
        <button type='button' className='btn-4 ms-auto mt-3'>Подробнее</button>
      </div>
      <img src={HumanFull} alt="HumanFull" />
    </div>
  );
};

export default Offer;