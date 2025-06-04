import {ItemCart} from "../../../lib/models/CartItem.ts";
import Typography from "../../typography/Typography.tsx";
import deleteIcon from '../../../assets/delete.svg';
import minusIcon from '../../../assets/-.svg';
import plusIcon from '../../../assets/+.svg';
interface CartItemProps {
    item : ItemCart;
    changeItem: (i: ItemCart[]) => void;
}
const CartItem = ({item, changeItem} : CartItemProps) => {
    const deleteItem1 = () => {
        let cartItems : ItemCart[] = JSON.parse(sessionStorage.getItem('cartItems') || '[]');

        cartItems = cartItems.filter(i => i.id !== item.id);

        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
        changeItem(cartItems);
    }
    const addItem = () => {
        const cartItems : ItemCart[] = JSON.parse(sessionStorage.getItem('cartItems') || '[]');
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity += 1;
        }
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
        changeItem(cartItems);
    }
    const minusItem = () => {
        const cartItems : ItemCart[] = JSON.parse(sessionStorage.getItem('cartItems') || '[]');
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity -= 1;
        }
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
        changeItem(cartItems);
    }
    return (
        <div className='bg-white rounded-[30px] mb-[30px] p-[15px]'>
            <div className='flex gap-[100px]'>
                <div className='flex gap-[22px]'>
                    <img src={item.image} alt=""/>
                    <div className='flex flex-col justify-center'>
                        <Typography type={'p1'}>{item.name}</Typography>
                        <Typography type={'p2'}>{item.discount? item.discount : item.price} ₽</Typography>
                    </div>
                </div>
                <img src={deleteIcon} alt="" className='flex self-start mt-[18px] cursor-pointer' onClick={deleteItem1}/>
            </div>
            <div className='flex justify-between'>
                <div className='flex'>
                    <img src={minusIcon} alt="" onClick={minusItem}/>
                    <Typography type={'p1'}>{item.quantity}</Typography>
                    <img src={plusIcon} alt="" onClick={addItem}/>
                </div>
                <Typography type={'p2'} className='font-bold'>{item.discount? item.discount : item.price} ₽</Typography>
            </div>
        </div>
    );
};

export default CartItem;