import React from 'react';
import {Link} from 'react-router-dom';
import { HiOutlineChevronRight } from "react-icons/hi2";

const Breadcrumbs = () => {
  return (
    <nav className='breadcrumbs'>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li className='divider'><HiOutlineChevronRight/></li>
        <li>
          <Link to="/erasfgvd">Внутренняя страница</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;