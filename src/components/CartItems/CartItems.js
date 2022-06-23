import Item from "../Item/item"

import {moreTherTen} from "../../database/moreTherTen.js"

function CartItems () {
    return (
        <main>
            <ul>
                {moreTherTen.items.map((item, index) => <Item img={item.imageUrl} name={item.name} price={item.price} />)}
            </ul>
        </main>
    )
}

export default CartItems