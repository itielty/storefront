import Style from "./CartControler.module.css"
export default function CartControler(props) {
    
    {
        let totalItem = 0
        // console.log(props.cart);
        if (props.cart.length) {
            return <>
                <h2 className={Style.CartTitle}>cart</h2>
               {/* { props.setTotalAllItems(props.totalAllItems + totalItem)} */}
                {props.cart.map(v => {
                    totalItem =+ v.amount * v.price
                    return <>
                        <div key={v.id}>
                            <img className="img" width="125px" height="130px" src={v.img} />
                            {`${v.price}$`}
                            {`amount:${v.amount}`}
                        </div>
                        {totalItem }
                        {/* {props.totalAllItems} */}
                    </>
                }
                )}
            </>
        }
        else {
            return <>
                <div className="cart">cart </div>
                <h1>Nothing in cart </h1>
                <h3>0$</h3>
            </>
        }

    }
}

