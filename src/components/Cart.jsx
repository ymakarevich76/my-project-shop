import { useContext } from "react";
import { ShopContext } from "../context";

function Cart () {
    const {handleBasketShow, order} = useContext(ShopContext);
    const quantity = order.length;

    return (
        <div className="cart purple darken-4 white-text" onClick={handleBasketShow}>
             <i className="material-icons">shopping_cart</i>
             {quantity ? quantity : null}
        </div>
    )
}

export {Cart}