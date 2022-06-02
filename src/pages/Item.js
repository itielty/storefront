import ItemControler from "../controlers/ItemControler";

export default function Item(props){
        
        return <div>{<ItemControler useCart={props.useCart} cart={props.cart}/>}</div>
}