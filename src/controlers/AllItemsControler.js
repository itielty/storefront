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

        console.log(arr);
        return arr.map(v => {
                return <div className="items" key={v.id}>
                        <NavLink
                                to={`/products/${v._id}`}>
                                {v.title}
                                <img className="img" width="100px" height="120px" src={v.image}/>
                        </NavLink>
                </div>
        })
}
