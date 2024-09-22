import {Item} from "../../lib/models/Item.ts";
import ItemCard from "./item-card/ItemCard.tsx";
import Typography from "../typography/Typography.tsx";

interface ItemListProps {
    name: string
    items: Item[]
}
const ItemList = ({name, items} : ItemListProps) => {
    return (
        <div className='mb-[28px] mt-[28px]'>
            <Typography type={'h2'} color='text-[#838383] mb-[20px]'>{name}</Typography>
            <div className='grid grid-cols-3 gap-[30px]'>
                {items.map(item => 
                    <ItemCard item={item}/>
                )}
            </div>
        </div>
    );
};

export default ItemList;