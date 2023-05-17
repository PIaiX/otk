import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../assets/imgs/logo.png';
import LogoColored from '../assets/imgs/logo-colored.png';
import ShoppingCart from './svg/ShoppingCart';
import {Link} from 'react-router-dom';
import Search from './svg/Search';
import { HiOutlineDevicePhoneMobile, HiXMark, HiBars3 } from "react-icons/hi2";
import useIsMobile from '../hooks/useIsMobile';

const Header = () => {
  const [isShowSearch, setIsShowSearch] = useState(false);
  const {isMobile} = useIsMobile('991px');

  const handleCloseSearch = () => setIsShowSearch(false);
  const handleShowSearch = () => setIsShowSearch(true);

  return (
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
            <li><a href="/">Каталог</a></li>
            <li><a href="/">Услуги</a></li>
            <li><a href="/">Примеры работ</a></li>
            <li><a href="/">Контакты</a></li>
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
          <button type='button' className='cart ms-4 ms-xxxl-5'>
            <ShoppingCart/>
          </button>

          <button type='button' className='btn-menu'>
            <HiBars3/>
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;