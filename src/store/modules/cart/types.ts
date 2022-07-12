export interface IProduct{
    id:number;
    name:string;
    brand:string;
    description:string;
    photo:string;
    price:string;
    priceNumber:number;
}

export interface ICartItem{
    product:IProduct;
    quantity: number;
    subtotal: number;
}

export interface ICartState{
    items: ICartItem[];
}
