import './App.css';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActionCreators from './state/product/productActionCreators'
import { State } from './state/store';

function App() {
  const dispatch = useDispatch();

  const { addProduct, removeProduct } = bindActionCreators(productActionCreators, dispatch)
  const state = useSelector((state : State) => state.product);
  const [description  , setDescription] = useState('');

  const handleAddProduct = (description : string) =>{
    addProduct(description);
  }

  const handleRemoreProduct = (id : number) => {
    removeProduct(id);
  }
  
  return (
    <div className="App">
      <input type ="text" value ={description} onChange={(e) => setDescription(e.target.value)} name = "description"></input>
      <button onClick={()=> handleAddProduct(description)}> Add Product</button>
      <div>
      { console.log(state)}
      {
        state.map(product =>{
          return (<div key = {product.id} >
          <span>{product.description}</span>
          <button onClick={() => handleRemoreProduct(product.id) }>Remove</button>
          </div>)
        })
      }
       </div>
    </div>
  );
}

export default App;
