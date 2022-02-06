import { makeAutoObservable } from "mobx";

class Product
{
    constructor(id: number, description : string) {
        makeAutoObservable(this);
        this.id = id;
        this.description = description;
    }
    id : number;
    description : string;
}

export default Product