import React from 'react';
import {Link} from 'react-router-dom';
import { BsChevronRight } from "react-icons/bs";

const NewsCard = () => {
  return (
    <figure className='news'>
      <figcaption>
        <h6 className='flex-1'>Что нужно знать перед установкой кондиционера?</h6>
        <Link to="/blog/article" className='stretched-link'>
          <BsChevronRight/>
        </Link>
      </figcaption>
      <img src="imgs/img7.jpg" alt="Что нужно знать перед установкой кондиционера?" />
    </figure>
  );
};

export default NewsCard;