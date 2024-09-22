export type ItemCart = {
    id: number;
    name: string;
    image:  string | undefined;
    price: number;
    discount?: number;
    rating: number;
    quantity: number;
}