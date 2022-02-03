import { useState } from "react";
import useProduct from "../../hooks/useProduct";

function AddProductForm() {
    const { addProduct } = useProduct();
    const [description  , setDescription] = useState('');
    return(
        <>
            <input type ="text" value ={description} onChange={(e) => setDescription(e.target.value)} name = "description"></input>
            <button onClick={()=> addProduct(description)}> Add Product</button>
        </>
    );
}

export default AddProductForm;