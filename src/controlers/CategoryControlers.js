import { useState, useEffect } from "react"
import axios from "axios"
// import AllItems from "./AllItems"
import { NavLink } from "react-router-dom";
export default function CategoryControlers() {
    const [arr, setArr] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3211/')
            .then((res) => setArr(res.data))
    }, [])

   if(arr){
       return <div className="allcat">{ arr.map(v => {
           return <div className="cat" key={v}>
                <nav  className="nav">
                    <NavLink
                        to={`/category/${v.category}`}>
                        {v.category}
                    </NavLink>
                        {/* <Routes>
                            <Route path={`${v}`} element={<AllItems name={v} />} />
                        </Routes> */}
                </nav> </div>})}
                </div>
                
        }

    }