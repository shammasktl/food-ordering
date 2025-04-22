import React from "react";
import Modal from "./Modal";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../util/currencyFormatter";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { useProgress } from "../context/UserProgressContext";

const Checkout = () => {
  const { cart } = useCart();
  const { progress, progressDispatch } = useProgress();

  const total = cart.reduce(
    (totalPrice, cartedMeal) =>
      totalPrice + cartedMeal.price * cartedMeal.quantity,
    0
  );

  const handleCloseCheckout = () => {
    progressDispatch({ type: "HIDE" });
  };

  const handleConfirmOrder = (event) => {
    event.preventDefault();

  };

  return (
    <Modal open={progress === "checkout"} onClose={handleCloseCheckout}>
      <form onSubmit={handleConfirmOrder} className="checkout-form">
        <h2>Wrap up your order</h2>
        <p>Total Amount: {formatCurrency.format(total)}</p>

        <Input id="full-name" label="Full Name" type="text" />
        <Input id="email" label="E-mail Address" type="email" />
        <Input id="street" label="Street" type="text" />
        <div className="control-row">
          <Input id="postal-code" label="Postal Code" type="text" />
          <Input id="city" label="City" type="text" />
        </div>

        <p className="modal-actions">
          <Button textOnly type="button" onClick={handleCloseCheckout}>
            Close
          </Button>
          <Button>Confirm Order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
