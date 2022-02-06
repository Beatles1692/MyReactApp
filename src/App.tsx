import { observer } from 'mobx-react-lite';
import ProductList from './components/product/productList';

function App() {
  return <ProductList></ProductList>
}

export default observer(App);