import React from 'react';
import {Link} from 'react-router-dom';

const FigureMain = (props) => {
  return (
    <svg className={props.className} width="1920" height="847" preserveAspectRatio="xMidYMax slice" viewBox="0 0 1920 847" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <image preserveAspectRatio="xMidYMin meet" width="1920" height="1305" xlinkHref={props.img} clipPath="url(#figure-1)"/>
      <rect x="1324" y="643" width="170" height="170" rx="85" fill="#2C2C2C"/>
      <path d="M1316,728a93,93 0 1,1 186,0a93,93 0 1,1 -186,0" id="MyPath2" fill="none"/>
      <text className="round" transform="rotate(0 0 0)">
        <textPath href="#MyPath2" side="left">перейти ● перейти ● перейти ● перейти ● </textPath>
        <animateTransform attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 0 0"
          to="360 0 0"
          dur="30s"
          repeatCount="indefinite"/>
      </text>
      <Link to="/catalog" className='link'>
        <text x="1358" y="735" className='link-text'>в каталог</text>
      </Link>
      <defs>
        <clipPath id="figure-1">
          <path fillRule="evenodd" clipRule="evenodd" d="M1967 -129C1967 -140.046 1958.05 -149 1947 -149H-17C-28.0457 -149 -37 -140.046 -37 -129V701C-37 712.046 -28.0457 721 -17 721H1283.14C1286.41 721 1289 723.734 1289 727C1289 793.274 1342.73 847 1409 847C1475.27 847 1529 793.274 1529 727C1529 723.734 1531.59 721 1534.86 721H1947C1958.05 721 1967 712.046 1967 701V-129Z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FigureMain;