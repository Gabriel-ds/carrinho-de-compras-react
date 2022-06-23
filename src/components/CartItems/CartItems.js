import Item from "../Item/item";

function CartItems({getApi}) {

  return (
    <>
      <main>
        <ul>
          {getApi.items.map((item, index) => (
            <Item img={item.imageUrl} name={item.name} price={item.price} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default CartItems;
