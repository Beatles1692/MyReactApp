import { observer } from "mobx-react-lite";
import { SyntheticEvent, useContext, useState } from "react";
import { ProductStoreContext } from "../../state/productStore"

function AddProductForm() {
    const store = useContext(ProductStoreContext);
    const [description, setDescription] = useState("");

    const handleSubmit = (e : SyntheticEvent ) => {
        e.preventDefault();
        store.addProduct(description);
        setDescription("");
    };

    return (
        <form  onSubmit={handleSubmit} >
            <input type="text" placeholder="product name" value={description} onChange={(e) => setDescription(e.target.value)} name="description"></input>
            <button type="submit">Add Product</button>
        </form>
    );
}

export default observer(AddProductForm);