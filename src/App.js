
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Headers/Header';
import Product from './components/Products/Product';
// import RingItem from './components/RingItems/RingItem';
function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <RingItem></RingItem> */}
     <Product></Product>
     
    </div>
  );
}

export default App;
