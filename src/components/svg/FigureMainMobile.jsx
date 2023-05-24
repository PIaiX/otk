import React from 'react';
import {Link} from 'react-router-dom';

const FigureMainMobile = (props) => {
  return (
    <svg className={props.className} width="375" height="430" preserveAspectRatio="xMidYMax slice" viewBox="0 0 375 430" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <image preserveAspectRatio="xMidYMin meet" width="375" height="430" xlinkHref={props.img} clipPath="url(#figure-1-mob)"/>

      <rect x="216" y="330" width="85" height="85" rx="42.5" fill="#2C2C2C"/>
      <path d="M211,372a47,47 0 1,1 95,0a47,47 0 1,1 -95,0" id="MyPath2-mob" fill="none"/>
      <text className="round">
        <textPath href="#MyPath2-mob" side="right">перейти • перейти • перейти • перейти • </textPath>
      </text>
      <Link to="/" className='link'>
        <text x="227" y="378" className='link-text'>в каталог</text>
      </Link>
      <defs>
        <clipPath id="figure-1-mob">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M394 5C394 2.23858 391.761 0 389 0H-13C-15.7614 0 -18 2.23858 -18 5V338C-18 340.761 -15.7614 343 -13 343H200.312C204.196 343 206.661 347.288 205.2 350.887C202.492 357.559 201 364.855 201 372.5C201 404.256 226.744 430 258.5 430C290.256 430 316 404.256 316 372.5C316 364.855 314.508 357.559 311.8 350.887C310.339 347.288 312.804 343 316.688 343H389C391.761 343 394 340.761 394 338V5Z"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default FigureMainMobile;