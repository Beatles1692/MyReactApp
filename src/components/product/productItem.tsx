import { observer } from "mobx-react-lite";
import { useContext } from "react";
import Product from "../../state/product/product"
import { ProductStoreContext } from "../../state/productStore";

interface IProductItemProps {
    product: Product
}
function ProductItem(props: IProductItemProps) {
    const product = props.product;
    const store = useContext(ProductStoreContext);
    return (
    <li key={product.id}>
        <span>{product.description}</span>
        <button onClick={() => store.removeProduct(product.id)}>Remove</button>
    </li>
    )
}

export default observer(ProductItem);