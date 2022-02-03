import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActionCreators from '../state/product/productActionCreators'

const useProduct =  () =>{
    const dispatch = useDispatch();
    const { addProduct, removeProduct } = bindActionCreators(productActionCreators, dispatch)
    return { removeProduct ,addProduct }
    
} 

export default useProduct;