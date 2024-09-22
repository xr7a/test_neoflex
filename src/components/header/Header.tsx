import Typography from "../typography/Typography.tsx";
import favorite from "../../assets/favorite.svg";
import shopCart from "../../assets/shop-cart.svg";
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <header className='flex justify-between items-center'>
            <NavLink to={'/'}>
                <Typography type={'h1'}>QPICK</Typography>
            </NavLink>
            <div className='flex gap-[45px]'>
                <NavLink to={'/'} className='flex items-center'>
                  <img src={favorite} alt=""/>
                </NavLink>
                <NavLink to={'/cart'}>
                    <img src={shopCart} alt=""/>
                </NavLink>
            </div>
        </header>
    );
};

export default Header;