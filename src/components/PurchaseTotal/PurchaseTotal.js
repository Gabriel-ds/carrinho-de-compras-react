import Swal from 'sweetalert2'

function PurchaseTotal({ getApi }) {

  let priceValues = [];
  getApi.items.map((p) => priceValues.push(p.price));
  const totalPrice =
    priceValues.reduce(
      (acc, current) => parseFloat(acc) + parseFloat(current)
    ) / 100;
  console.log(priceValues);

  const PurchaseAlert = () => {
    console.log('hello')
    Swal.fire({
      title: "Compra efetuada! 👏",
      text: "Parabéns! Você acabou de realizar a compra!",
      icon: "success",
      className: "swal-back"
    })
  }

  return (
    <div className="purchase-action">
      <div className="purchase-total">
        <h3>Total</h3>
        <span>R${totalPrice}</span>
      </div>
      {totalPrice > 10 ? (
        <div className="free-shipping">
          <span>Você possui frete grátis para a compra!</span>
        </div>
      ) : (
        ""
      )}

      <button onClick={() => PurchaseAlert()} className="btn-purchase" >Finalizar compra</button>
    </div>
  );
}

export default PurchaseTotal;
