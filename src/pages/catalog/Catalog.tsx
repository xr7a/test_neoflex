import ItemList from "../../components/item-list/ItemList.tsx";
import {Item} from "../../lib/models/Item.ts";
import appleByz from '../../assets/apple-buz.svg';
import appleEarpods1 from "../../assets/apple-earpods-1.png";
import appleEarpods2 from "../../assets/apple-earpods-2.png";
import appleAirpods from '../../assets/apple-airpods.png';
import gerlax from '../../assets/gerlax.png';
import borofone from "../../assets/borofone.png"

const Catalog = () => {
    const headphones : Item[] = [
        {id: 1, name: "Apple BYZ S852I", image: appleByz, discount: 2927, price: 3527, rating: 4.7},
        {id: 2, name: "Apple EarPods", image: appleEarpods1, price: 2327, rating: 4.5},
        {id: 3, name: "Apple EarPods", image: appleEarpods2, price: 2327, rating: 4.5}, 
        {id: 4, name: "Apple BYZ S852I", image: appleByz, price: 2927, rating: 4.7},
        {id: 5, name: "Apple EarPods", image: appleEarpods1, price: 2327, rating: 4.5},
        {id: 6, name: "Apple EarPods", image: appleEarpods2, price: 2327, rating: 4.5},
    ]
    const wirelessHeadphones : Item[] = [
        {id: 7, name: "Apple AirPods", image: appleAirpods, price: 9527, rating: 4.7},
        {id: 8, name: "GERLAX GH-04", image: gerlax, price: 6527, rating: 4.7},
        {id: 9, name: "BOROFONE BO4", image: borofone, price: 7527, rating: 4.7}
    ]
    return (
        <div>
          <ItemList name={'Наушники'} items={headphones}/>
          <ItemList name={'Беспроводные наушники'} items={wirelessHeadphones}/>
        </div>
    );
};

export default Catalog;
