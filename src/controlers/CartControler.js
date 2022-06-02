import { useState } from "react"



export default function CartControler(props) {
    {
        console.log(props.cart);
        if (props.cart.length) {
          return  props.cart.map(v => {
              return  <div key={v.id}>
                     <img className="img" width="125px" height="130px" src={v.img}/>
                     {`${v.price}$`}
                     {`amount:${v.amount}`}
                </div>
                }
            )
        }
        else {
            return <>
                <div className="cart">cart </div>
                <h1>Nothing in cart</h1>
            </>
        }

    }
}

