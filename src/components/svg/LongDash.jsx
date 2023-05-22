import React from 'react';

const LongDash = (props) => {
  return (
    <svg className={props.className} width="30" height="2" viewBox="0 0 30 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1H30" stroke="currentColor"/>
    </svg>
  );
};

export default LongDash;