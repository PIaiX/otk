import React from 'react';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import Plaix from '../assets/imgs/plaix.svg';
import PlaixIcon from '../assets/imgs/plaixIcon.svg';

const Footer = () => {
  return (
    <footer>
      <Container className='h-100 d-flex justify-content-between align-items-center'>
        <div>
          <ul className='mb-4'>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/">Каталог</Link>
            </li>
            <li>
              <Link to="/">Услуги</Link>
            </li>
            <li>
              <Link to="/">Доставка и оплата</Link>
            </li>
            <li>
              <Link to="/">Примеры работ</Link>
            </li>
            <li>
              <Link to="/">Контакты</Link>
            </li>
          </ul>
          <ul className='mb-4'>
            <li>
              <Link to="/">Кондиционеры</Link>
            </li>
            <li>
              <Link to="/">Рекуператоры</Link>
            </li>
            <li>
              <Link to="/">Бризеры</Link>
            </li>
            <li>
              <Link to="/">Сплит-системы</Link>
            </li>
            <li>
              <Link to="/">Тепловое оборудование</Link>
            </li>
          </ul>
          <div><Link to="/" className='bb-05'>Политика конфиденциальности</Link></div>
        </div>
        <div className="devs">
          <img src={PlaixIcon} alt="Plaix" className='me-2'/>
          <span>Создано в</span>
          <img src={Plaix} alt="Создано в Plaix" className='ms-1'/>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;