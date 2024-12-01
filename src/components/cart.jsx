function Cart(props) {
  const { cartList } = props;

  return (
    <div>
      {cartList.map((cart) => (
        <p key={cart.id + Math.floor(Math.random() * 100000)}>{cart.title}</p>
      ))}
    </div>
  );
}

export default Cart;
