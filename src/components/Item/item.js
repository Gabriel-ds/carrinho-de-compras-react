function Item({img, name, price}) {
  return (
    <>
      <li>
        <img src={img} alt="Imagem bom bom"></img>
        <div className="item-info">
        <p>{name}</p>
        <span>R${price}</span>
        </div>
      </li>
    </>
  );
}

export default Item
