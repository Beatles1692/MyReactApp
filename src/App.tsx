import './App.css';
import AddProductForm from './components/addProductForm';
import { useSelector } from 'react-redux';
import { State } from './state/store';
import ProductItem from './components/productItem';

function App() {
  const state = useSelector((state : State) => state.product);
  return (
    <div className="App">
      <AddProductForm></AddProductForm>
      <div>
      {
        state.map(product =>{
          return (<ProductItem key= {product.id} product= {product}></ProductItem>)
        })
      }
       </div>
    </div>
  );
}

export default App;
