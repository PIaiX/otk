import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../assets/imgs/logo.png';
import LogoColored from '../assets/imgs/logo-colored.png';
import ShoppingCart from './svg/ShoppingCart';
import {Link, NavLink} from 'react-router-dom';
import Search from './svg/Search';
import { HiOutlineDevicePhoneMobile, HiXMark, HiBars3 } from "react-icons/hi2";
import useIsMobile from '../hooks/useIsMobile';
import Devs from './utils/Devs';

const Header = () => {
  const {isMobile} = useIsMobile('991px');

  const [isShowSearch, setIsShowSearch] = useState(false);
  const handleCloseSearch = () => setIsShowSearch(false);
  const handleShowSearch = () => setIsShowSearch(true);

  const [isShowMenu, setIsShowMenu] = useState(false);
  const handleCloseMenu = () => setIsShowMenu(false);
  const handleShowMenu = () => setIsShowMenu(true);

  return (
    <>
      <header>
        <Container className='h-100 d-flex justify-content-between align-items-center'>
          <div className="d-flex align-items-center">
            <Link to="/" className='logo'>
              {
                (isMobile)
                ? <img src={LogoColored} alt="logotip" />
                : <img src={Logo} alt="logotip" />
              }
            </Link>
            <Dropdown className='d-none d-lg-block'>
              <Dropdown.Toggle variant={'none'}>
                Казань
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Москва</Dropdown.Item>
                <Dropdown.Item>Санкт-Петербург</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {
            (!isMobile) &&
            <ul className='list-unstyled d-flex menu'>
              <li><NavLink to="/catalog">Каталог</NavLink></li>
              <li><NavLink to="/services">Услуги</NavLink></li>
              <li><NavLink to="/portfolio">Примеры работ</NavLink></li>
              <li><NavLink to="/contacts">Контакты</NavLink></li>
            </ul>
          }

          <div className="d-flex align-items-center">
            <button type='button' className='search-icon d-xl-none' onClick={handleShowSearch}>
              <Search/>
            </button>
            <Offcanvas show={isShowSearch} onHide={handleCloseSearch} placement={'top'} responsive="xl" className="offcanvas-search">
              <Offcanvas.Body>
                <form action="" className='form-search'>
                  <input type="search" placeholder='Поиск'/>
                  <button type='submit'>
                    <Search/>
                  </button>
                </form>
                <button type='button' className='close d-xl-none' onClick={handleCloseSearch}>
                  <HiXMark className='fs-15'/>
                </button>
              </Offcanvas.Body>
            </Offcanvas>
            
            <a href="tel:+79893685862" className='phone ms-4 ms-xxxl-5'>
              <HiOutlineDevicePhoneMobile className='fs-13 d-xl-none'/>
              <span className='d-none d-xl-inline'>+7 989 368-58-62</span>
            </a>
            <Link to='cart' className='cart ms-4 ms-xxxl-5'>
              <ShoppingCart/>
            </Link>

            <button type='button' className='btn-menu' onClick={(isShowMenu) ? handleCloseMenu : handleShowMenu}>
              {
                (isShowMenu)
                ? <HiXMark/>
                : <HiBars3/>
              }
            </button>
          </div>
        </Container>
      </header>

      <Offcanvas show={isShowMenu} onHide={handleCloseMenu} className="offcanvas-menu" placement={'end'}>
        <Offcanvas.Body>
          <Container>
            <div className="offer">
              <h2>Вместе выгоднее</h2>
              <h5>Закажите оборудование и получите скидку 50% на его установку</h5>
              <button type='button' onClick={handleCloseMenu} className='btn-4 fs-12 ms-auto'>Подробнее</button>
            </div>
            <nav onClick={handleCloseMenu}>
              <ul className='list-unstyled'>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/catalog">Каталог</Link></li>
                <li><Link to="/services">Услуги</Link></li>
                <li><Link to="/portfolio">Примеры работ</Link></li>
                <li><Link to="/about">О бренде</Link></li>
                <li><Link to="/delivery">Оплата и доставка</Link></li>
              </ul>
            </nav>
            <Devs className={'mx-auto mt-4'}/>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;