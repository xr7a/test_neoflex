
export type Item = {
    id: number
    name: string;
    image:  string | undefined;
    price: number;
    discount?: number;
    rating: number;
}