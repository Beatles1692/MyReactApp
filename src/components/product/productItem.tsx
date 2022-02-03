import useProduct from "../../hooks/useProduct";
import Product from "../../state/product/product"

interface IProductItemProps
{
    product : Product
}
function ProductItem(props : IProductItemProps){
    const product = props.product;
    const { removeProduct} = useProduct();
    return (<>
        <span>{product.description}</span>
        <button onClick={() => removeProduct(product.id) }>Remove</button>
        </>)
}

export default ProductItem;