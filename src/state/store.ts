import { applyMiddleware, combineReducers, createStore } from "redux";
import ProductReducer from "./product/productReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    product : ProductReducer
})

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)

export type State = ReturnType<typeof reducers>