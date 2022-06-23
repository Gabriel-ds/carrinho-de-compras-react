import { useState } from "react";

import { moreTherTen } from "../../database/moreTherTen.js";
import { lessTherTen } from "../../database/lessTherTen.js";

import CartItems from "../../components/CartItems/CartItems"
import PurchaseTotal from "../../components/PurchaseTotal/PurchaseTotal"

function ShoppingCart() {
    const [getApi, setGetApi] = useState(lessTherTen);

    const ChangeApi = () => {
      getApi === lessTherTen ? setGetApi(moreTherTen) : setGetApi(lessTherTen);
    };
    return (
        <div className="shopping-cart">
            <button onClick={() => ChangeApi()}>Alterar dados do Servidor</button>
            <h2 className="title">Meu carrinho</h2>
            <CartItems getApi={getApi} />
            <PurchaseTotal getApi={getApi} />
        </div>
    )
}

export default ShoppingCart