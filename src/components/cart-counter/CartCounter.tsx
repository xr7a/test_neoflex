import {ItemCart} from "../../lib/models/CartItem.ts";
import Typography from "../typography/Typography.tsx";

interface CartCounterProps {
    items: ItemCart[]
}
const CartCounter = ({items} : CartCounterProps) => {
    let counter = 0;
    for (let i = 0; i < items.length; i++){
        counter += ( items[i].discount || items[i].price ) * items[i].quantity;
    }
    return (
        <div className='bg-white w-[350px] h-[120px] rounded-[30px] p-[20px] '>
            <div className='flex justify-between'>
                <Typography type={'p1'}>Итого</Typography>
                {counter}
            </div>
        </div>
    );
};

export default CartCounter;