import React from 'react';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import Plaix from '../assets/imgs/plaix.svg';

const Footer = () => {
  return (
    <footer>
      <Container className='h-100 d-flex justify-content-between align-items-center'>
        <div>
          <ul>
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
          <ul>
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
          <div><Link to="/" className='text-underline'>Политика конфиденциальности</Link></div>
        </div>
        <div className="devs">
          <span>Создано в</span>
          <img src={Plaix} alt="Создано в Plaix" />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;