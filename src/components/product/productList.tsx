import { useSelector } from "react-redux";
import { State } from "../../state/store";
import AddProductForm from "./addProductForm";
import ProductItem from "./productItem";

function ProductList() {
  const state = useSelector((state: State) => state.product);
  return (
    <div className="App">
      <AddProductForm></AddProductForm>
      <div>
        {state.map((product) => {
          return <ProductItem key={product.id} product={product}></ProductItem>;
        })}
      </div>
    </div>
  );
}

export default ProductList;
