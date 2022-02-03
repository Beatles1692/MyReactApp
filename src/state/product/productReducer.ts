
import ProductActionTypes from './productActionTypes'

import Product from './product'
import Action from './productActions'


let currentId : number = 0;

const initialState : Product[] = [];

const ProductReducer =(state : Product[] = initialState, action : Action) : Product[] =>{
    switch (action.type){
        case ProductActionTypes.PRODUCT_ADDED :
            return [...state, { id : ++currentId, description : action.payload.description} ]
        case ProductActionTypes.PRODUCT_REMOVED :
            return state.filter( p => p.id !== action.payload.id);
        default :
            return state;
    }
}

export default ProductReducer;

