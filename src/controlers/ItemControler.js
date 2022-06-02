import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom";
export default function ItemControler(props) {

        const params = useParams()

        const [arr, setArr] = useState({})

        console.log(arr);

        function findID() {
               serchInCart(arr.id)
        }

        function serchInCart(id) {
                const res = props.cart.findIndex(v => v.id == id)

                console.log(res);

                if (res != -1) {
                        props.cart[res].amount++//
                }
                else {
                        addToCart(id)
                }
        }
        
        function addToCart(id) {
                console.log(arr);
                const obj = {
                        id: id,
                        price: arr.price,
                        amount: 1,
                        img: arr.image
                }
                console.log(obj);
                props.useCart([...props.cart,obj])//
        }

        useEffect(() => {
                axios.get(`http://localhost:3211/item/${params.item}`)
                        .then((res) => setArr(res.data))
        }, [])

        return <>
                <div className="item" key={arr.id}>
                        {`category - "${arr.category}"`}
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        {arr.title}
                        <br />
                        <br />
                        {`${arr.price}$`}
                        <br />
                        <br />
                        {arr.description}
                        <img className="img" width="500px" height="520px" src={arr.image} />
                </div>

                <button onClick={findID} className="but">buy</button>
        </>
}