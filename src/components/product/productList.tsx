
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { ProductStoreContext } from "../../state/productStore";
import AddProductForm from "./addProductForm";
import ProductItem from "./productItem";

function ProductList() {
  const store = useContext(ProductStoreContext);
  return (
    <div className="App">
      <AddProductForm></AddProductForm>
      <ul>
        {store.products.map((product) => {
          return <ProductItem key={product.id} product={product}></ProductItem>;
        })}
      </ul>
      <span> Count of Products : {store.count}</span>
    </div>
  );
}

export default observer(ProductList);
