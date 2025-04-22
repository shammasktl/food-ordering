import React from "react";
import Modal from "./Modal";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../util/currencyFormatter";
import Button from "./UI/Button";
import { useProgress } from "../context/UserProgressContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const { progress, progressDispatch } = useProgress();

  const total = cart.reduce(
    (totalPrice, cartedMeal) =>
      totalPrice + cartedMeal.price * cartedMeal.quantity,
    0
  );

  const handleCloseCart = () => {
    progressDispatch({ type: "HIDE" });
  };

  const handleIncrement = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: { id } });
  };

  const handleDecrement = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: { id } });
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_MEAL", payload: { id } });
  };

  const handleWrapUpOrder = () => {
    progressDispatch({ type: "SHOW_CHECKOUT" });
  }

  return (
    <Modal className="cart" open={progress === "cart"}>
      <h2>Your Cart</h2>

      <ul>
        {cart.map((cartedMeal) => (
          <CartItem
            key={cartedMeal.id}
            id={cartedMeal.id}
            name={cartedMeal.name}
            price={cartedMeal.price}
            qty={cartedMeal.quantity}
            onDecrement={() => handleDecrement(cartedMeal.id)}
            onIncrement={() => handleIncrement(cartedMeal.id)}
            onRemove={() => handleRemove(cartedMeal.id)}
          />
        ))}
      </ul>

      <p className="cart-total">{formatCurrency.format(total)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cart.length > 0 && (
          <Button onClick={handleWrapUpOrder}>Wrap up your order</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
