import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@mui/material';

function ActiveCategory(props) {
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{ flexGrow: 1 }}
      style={{ paddingLeft: '10px' }}
    >
      | Shopping: {props.activeCategory}
    </Typography>
  );
}

const mapStateToProps = (state) => ({
  activeCategory: state.categoryReducer.activeCategory,
});

export default connect(mapStateToProps)(ActiveCategory);
