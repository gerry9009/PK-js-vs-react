function Cards(props) {
  const { productList, handleOnClick, toggleIsModal } = props;

  return (
    <div className="products">
      {productList.map((product) => {
        return (
          <div key={product.id} className="product">
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} />
            <p>${product.price}</p>
            <p>{product.description}</p>
            <p>{product.stock} item(s) left</p>
            <button onClick={() => handleOnClick(product.id)}>
              Add to cart
            </button>
            <button onClick={toggleIsModal}>OPEN</button>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
