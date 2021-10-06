import React from 'react';
import { connect } from 'react-redux';
import { removeCart } from '../redux/cart';
import { Card, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './cart.scss';

export const Cart = (props) => {
  return (
    <Card className="cart">
      {props.cart.length < 1 && <div>Your cart is empty!</div>}
      {props.cart.map((product) => (
        <div className="cart-item">
          {product.name}
          <IconButton
            size="small"
            color="error"
            onClick={() => {
              props.removeCart(product);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
    </Card>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
});

const mapDispatchToProps = {
  removeCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
