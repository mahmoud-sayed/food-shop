import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  cartAddItem,
  cartRemoveItem,
} from '../../../../redux/cart/cart.action';
import {
  selectCartItems,
  selectCartItemsCount,
} from '../../../../redux/cart/cart.selector';

import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';
import './styles.css';

const MenuItem = () => {

  return (
    <div className='item'>
      <img src='./sasas' alt='food' />
      <div className='item-head_desc'>
        <p className='head_desc-name'></p>
        <p className='head_desc-info'>
          <small>info</small>
        </p>
      </div>
      <div className='item-foot_desc'>
        <span className='foot_desc-price'>$10</span>
        <ButtonAddRemoveItem />
      </div>
    </div>
  );
};


export default MenuItem;
