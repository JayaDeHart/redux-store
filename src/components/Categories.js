import React from 'react';
import { connect } from 'react-redux';
import { changeCategory } from '../redux/categories';
import '../app.scss';
import { Button, ButtonGroup } from '@mui/material';
import Products from './Products';

function Categories(props) {
  return (
    <div className="main">
      <ButtonGroup variant="text" aria-label="text button group">
        {props.categories.map((category) => (
          <Button
            key={category.name}
            onClick={() => {
              props.changeCategory(category.name);
            }}
          >
            {category.displayName}
          </Button>
        ))}
      </ButtonGroup>
      <Products />
    </div>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categoryReducer.categories,
});

const mapDispatchToProps = { changeCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
