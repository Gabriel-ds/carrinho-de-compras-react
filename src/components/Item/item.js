function Item({img, name, price}) {
  return (
    <>
      <li>
        <img className="cropped1" src={img} alt="Imagem bom bom"></img>
        <div className="item-info">
        <p>{name}</p>
        <span>R${(price / 100).toFixed(2)}</span>
        </div>
      </li>
    </>
  );
}

export default Item
