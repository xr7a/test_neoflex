import Typography from "../../components/typography/Typography.tsx";
import CartList from "../../components/cart-list/CartList.tsx";
import {useState} from "react";
import {ItemCart} from "../../lib/models/CartItem.ts";
import CartCounter from "../../components/cart-counter/CartCounter.tsx";

const ShopCart = () => {
    const [items, setItems] = useState(sessionStorage.getItem('cartItems'));
    const changeItem = (i: ItemCart[]) => {
        setItems(JSON.stringify(i));
    }
    return (
        <div>
            {items ?
                <CartList changeItem={changeItem} items={JSON.parse(items)}/>
                :
                <Typography type={'h2'}>Корзина пуста</Typography>
            }
        </div>
    );
};

export default ShopCart;