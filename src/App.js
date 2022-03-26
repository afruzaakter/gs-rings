
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Headers/Header';
import Shop from './components/Shop/Shop';

// import RingItem from './components/RingItems/RingItem';
function App(props) {
  console.log(props.item);
  return (
    <div className="App">
      <Header></Header>

      <Shop></Shop>
    
    </div>
  );
}

export default App;
