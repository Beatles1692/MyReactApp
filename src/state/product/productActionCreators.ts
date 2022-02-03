import { Dispatch } from "redux"
import Action from "./productActions"
import ProductActionType from "./productActionTypes"

export const addProduct = (description : string) =>{
    return (dispatch : Dispatch<Action> ) =>{
        dispatch({
            type : ProductActionType.PRODUCT_ADDED,
            payload : { description }
        })
    }
}

export const removeProduct = (id : number) =>{
    return (dispatch : Dispatch<Action> ) =>{
        dispatch({
            type : ProductActionType.PRODUCT_REMOVED,
            payload : { id }
        })
    }
}