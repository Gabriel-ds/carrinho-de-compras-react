import { moreTherTen } from "../../database/moreTherTen.js";

function PurchaseTotal() {

  let priceValues = [];
  moreTherTen.items.map(p => priceValues.push(p.price));
  const totalPrice = (priceValues.reduce((acc, current) => parseFloat(acc) + parseFloat(current))) / 100
  console.log(priceValues)
  console.log(totalPrice)


  return (
    <div className="purchase-action">
      <div className="purchase-total">
        <h3>Total</h3>
        <span>R${totalPrice}</span>
      </div>
      <button>Finalizar compra</button>
    </div>
  );
}

export default PurchaseTotal;
