import React from 'react';
import './title.styles.scss'

const Title = ({children}) => {
  return (
    <div className='title-container'>
      {children}
    </div>
  );
};

export default Title;