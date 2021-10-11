import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getInitial } from './redux/products';

import './app.scss';
import Categories from './components/Categories.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';

function App(props) {
  useEffect(() => {
    props.getInitial();
  }, []);
  return (
    <div className="app">
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}
const mapDispatchToProps = { getInitial };

export default connect(null, mapDispatchToProps)(App);
