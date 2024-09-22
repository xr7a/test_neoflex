import CartItem from "./cart-item/CartItem.tsx";
import Typography from "../typography/Typography.tsx";
import {ItemCart} from "../../lib/models/CartItem.ts";
import CartCounter from "../cart-counter/CartCounter.tsx";
interface CartListProps {
    items: ItemCart[],
    changeItem: (i : ItemCart[]) => void;
}
const CartList = ({items, changeItem} : CartListProps) => {
   
    return (
        <div>
            <Typography type={'h2'} className='mb-[13px]'>Корзина</Typography>
            <div className='flex justify-between'>
                <div>
                    {items.map(item =>
                        <CartItem changeItem={changeItem} item={item}/>
                    )}
                </div>
                <CartCounter items={items}/>
                
            </div>
        </div>
    );
};

export default CartList;