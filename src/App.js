import './app.scss';
import Categories from './components/Categories.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="app">
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
