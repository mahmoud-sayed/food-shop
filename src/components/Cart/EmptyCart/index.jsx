import React from 'react';
import { useHistory } from 'react-router';
import './styles.css';

const EmptyCart = () => {

  return (
    <div className='emptyCart'>
      <img src='https://merchlist.co/assets/emptycart.png' alt='' />
      <button >
        <i className='fas fa-long-arrow-alt-left'></i> Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;
