import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../../redux/cart/cart.selector';
import './styles.css';

const ButtonCartCount = () => {

  return (
    <div className='btnCartCount' >
      <div className='count'>99</div>
      <i class='fas fa-shopping-cart'></i>
    </div>
  );
};


export default ButtonCartCount;
