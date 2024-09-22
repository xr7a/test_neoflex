import {Item} from "../../../lib/models/Item.ts";
import Typography from "../../typography/Typography.tsx";
import star from '../../../assets/star.svg';
import {ItemCart} from "../../../lib/models/CartItem.ts";

interface ItemCardProps {
    item: Item
}
const ItemCard = ({item} : ItemCardProps) => {
    const getInCart = () => {
        let cartItems : ItemCart[]= JSON.parse(sessionStorage.getItem('cartItems')) || [];

        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity += 1;
        } else {
            const newItem = {
                ...item, // Копируем все свойства item (например, id, name)
                quantity: 1, // Добавляем поле с количеством
            };
            cartItems.push(newItem); // Добавляем новый товар в корзину
        }

        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

    }
    return (
        <div className='bg-white rounded-[30px] flex flex-col justify-center items-center gap-[50px] p-[15px]'>
            <div className='h-[237px] flex items-center'>
                <img src={item.image} alt=''/>
            </div>
            <div className=' w-full flex justify-between pl-[22px] pr-[22px] pb-[32px]'>
                <div>
                    <Typography type={'p1'} className='mb-[26px]'>{item.name}</Typography>
                    <div className='flex gap-[10px]'>
                        <img src={star} alt=""/>
                        <Typography type={'p1'} color='text-[#838383]'>{item.rating}</Typography>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    {item.discount? 
                        <div className='flex flex-col items-center'>
                            <Typography type={'p1'} color='text-[#FFA542]'>{item.discount} ₽</Typography>
                            <Typography type={'p3'} color='text-[#FFA542]' className='mb-[5px] line-through'>{item.price} ₽</Typography>
                        </div>
                        :
                        <Typography type={'p1'} color='text-[#FFA542]' className='mb-[26px]'>{item.price} ₽</Typography>
                    }
                    <div onClick={getInCart} className='w-[70px] cursor-pointer hover:bg-gray-400 active:bg-gray-500 rounded-[10px] flex justify-center'>
                        <Typography type={'p1'}>Купить</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;