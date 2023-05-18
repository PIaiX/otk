import React from 'react';
import PlaixIcon from '../../assets/imgs/plaixIcon.svg';
import PLaix from '../svg/PLaix';

const Devs = (props) => {
  return (
    <div className={"devs " + props.className}>
      <img src={PlaixIcon} alt="Plaix" className='me-2'/>
      <span>Создано в</span>
      <PLaix title={"Создано в Plaix"} className='ms-1'/>
    </div>
  );
};

export default Devs;