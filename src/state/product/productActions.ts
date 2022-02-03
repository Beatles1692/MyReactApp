import ProductActionTypes from './productActionTypes'

type AddProductPayLoad =
{
    description : string
}

type RemoveProductPayLoad =
{
    id : number;

}

interface IAddProductAction
{
    type : ProductActionTypes.PRODUCT_ADDED,
    payload : AddProductPayLoad
}

interface IRemoveProductAction
{
    type : typeof ProductActionTypes.PRODUCT_REMOVED,
    payload : RemoveProductPayLoad
}

type Action = IAddProductAction | IRemoveProductAction

export default Action;