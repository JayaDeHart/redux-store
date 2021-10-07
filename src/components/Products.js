import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import './products.scss';
import { addCart } from '../redux/cart';

export const Products = (props) => {
  console.log(props.products);
  return (
    <div>
      {props.products
        .filter((product) => product.display)
        .map((product) => {
          return (
            <Card key={product.name} className="product" sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {product.name}
                </Typography>
                <Typography variant="body2">{product.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => {
                    props.addCart(product);
                  }}
                  size="small"
                >
                  Add to cart
                </Button>
                <Typography variant="body2">${product.price}.00 </Typography>
                <Typography variant="body2">Stock: {product.stock} </Typography>
              </CardActions>
            </Card>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.productReducer.products,
});

const mapDispatchToProps = { addCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
