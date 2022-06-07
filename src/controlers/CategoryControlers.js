import { useState, useEffect } from "react"
import axios from "axios"
import Style from "./CategoryControlers.module.css"
import { NavLink } from "react-router-dom";
export default function CategoryControlers() {
    const [arr, setArr] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3211/')
            .then((res) => setArr(res.data))
    }, [])

    if (arr) {
        return <div className={Style.CategorisName}>
            <h2 className={Style.name}>categoris</h2>
            <div className={Style.sBox}> {arr.map(v => {
                if (!v.isActive) return
                return <div key={v}>
                    <NavLink
                        to={`/category/${v.category}`}>
                        <div className={Style.Name}>
                            <span className={Style.span}>  {v.category}</span>
                        </div>
                    </NavLink>
                    {/* <Routes>
                            <Route path={`${v}`} element={<AllItems name={v} />} />
                        </Routes> */}
                </div>
            })}
            </div>
        </div>

    }

}