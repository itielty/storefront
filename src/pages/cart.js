import CartControler from "../controlers/CartControler";

export default function Cart(props){
    return <div>{<CartControler cart={props.cart}/>}</div>
}