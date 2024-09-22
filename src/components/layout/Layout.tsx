import {ReactNode} from "react";
import Header from "../header/Header.tsx";

interface LayoutProps {
    children: ReactNode
}
const Layout = ({children} : LayoutProps) => {
    return (
        <div className='laptop:pl-[165px] laptop:pr-[165px] desktop:pl-[300px] desktop:pr-[300px]'>
            <Header/>
            <main>{children}</main>
        </div>
    );
};

export default Layout;