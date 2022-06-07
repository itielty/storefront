import Style from "./AllItemsControler.module.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from "axios"
import { NavLink } from "react-router-dom";
export default function AllItemsControler() {
        const params = useParams()
        const [arr, setArr] = useState([])
        useEffect(() => {
                axios.get(`http://localhost:3211/items/${params.cat}`)
                        .then((res) => setArr(res.data))
        }, [])

        return <>
                <h2>{params.cat}</h2>
                {arr.map(v => {
                        return <div className="items" key={v.id}>
                                <NavLink
                                        to={`/products/${v._id}`}>
                                        <div className={Style.itemDiv}>
                                                <img className={Style.pic} src={v.image} />
                                                <h3>  {v.title}</h3>
                                                {v.description}
                                                price: {v.price}$
                                        </div>
                                </NavLink>
                        </div>
                })}
        </>
}
