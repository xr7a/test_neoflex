import {typographyStyles} from "./styles.ts";
import {ReactNode} from "react";

export type ITypographyTypes = "h1" | "h2" | "p1" | "p2" | "p3"; 
interface ITypography {
    type: ITypographyTypes,
    color?: string,
    className?: string, 
    children: ReactNode
}
const Typography = ({type, color, className, children} : ITypography) => {
    const typeClass = typographyStyles[type];
    return (
        <div className={`${typeClass} ${color? color : ""} ${className ? className : ""}`}>
            {children}            
        </div>
    );
};

export default Typography;