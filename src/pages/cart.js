import CartControler from "../controlers/CartControler";
import Style from "./Cart.module.css"
export default function Cart(props){
    return <div className={Style.Cart}>{<CartControler cart={props.cart}/>}</div>
}