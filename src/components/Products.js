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

export const Products = (props) => {
  console.log(props);
  return (
    <div>
      {props.products.map((product) => {
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
              <Button size="small">Add to cart</Button>
              <Typography variant="body2">${product.price}.00 </Typography>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.productReducer.displayProducts,
});

export default connect(mapStateToProps)(Products);
