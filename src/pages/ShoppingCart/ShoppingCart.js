import CartItems from "../../components/CartItems/CartItems"
import PurchaseTotal from "../../components/PurchaseTotal/PurchaseTotal"

function ShoppingCart() {
    return (
        <div className="shopping-cart">
            <h2 className="title">Meu carrinho</h2>
            <CartItems />
            <PurchaseTotal />
        </div>
    )
}

export default ShoppingCart