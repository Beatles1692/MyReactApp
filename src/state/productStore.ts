import { makeAutoObservable } from "mobx";
import { createContext } from "react";

import Product from "./product/product";

export default class ProductStore 
{
    constructor() {
        makeAutoObservable(this);
        this.products = [];
    }

    products : Product[];

    addProduct(description : string)
    {
        this.products.push(new Product(Date.now(), description));
    }

    removeProduct(id : number)
    {
        this .products = this.products.filter( p => p.id !== id);
    }

    get count() : number{
        return this.products.length;
    }
}

export const ProductStoreContext = createContext<ProductStore>(new ProductStore());
