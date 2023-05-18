import React from 'react';
import BG from '../../assets/imgs/bg/bg-green.jpg'
import Thumb from '../../assets/imgs/bg/thumb.png'
import useIsMobile from '../../hooks/useIsMobile';

const Guarantee = (props) => {
  const {isMobile} = useIsMobile('991px');

  return (
    <svg className={props.className} width="880" height="276" viewBox="0 0 880 276" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <image width="880" height="276" xlinkHref={BG} preserveAspectRatio="none" clipPath="url(#figure-2)"/>
      {
        (isMobile)
        ? <>
        <text x="47" y="75" class="title">3&nbsp;года</text>
        <text x="47" y="120" class="text">гарантия</text>
        <text x="170" y="120" dy="0" class="text">на&nbsp;оборудование</text>
        </>
        : <>
        <text x="47" y="100" className="title">3 года</text>
        <text x="291" y="78" className="text">гарантия</text>
        <text x="291" y="78" dy="30" className="text">на оборудование</text>
        </>
      }
      <path d="M573,156a92,92 0 1,1 184,0a92,92 0 1,1 -184,0" id="MyPath" fill="none"/>
      <text className="round">
        <textPath href="#MyPath" side="right">безупречная репутация ● безупречная репутация ● </textPath>
      </text>
      <image x="595" y="78" width="135" height="135" xlinkHref={Thumb}/>
      <defs>
        <clipPath id="figure-2">
          <path fillRule="evenodd" clipRule="evenodd" d="M880 20C880 8.95431 871.046 0 860 0H20C8.95431 0 0 8.9543 0 20V138C0 149.046 8.95433 158 20 158H525.341C536.259 158 544.983 166.824 546.933 177.567C557.092 233.548 606.088 276 665 276C723.912 276 772.908 233.548 783.067 177.567C785.017 166.824 793.741 158 804.659 158H860C871.046 158 880 149.046 880 138V20Z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Guarantee;