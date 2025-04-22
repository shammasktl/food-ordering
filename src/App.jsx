import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import CartProvider from "./context/CartContext";
import UserProgressProvider from "./context/UserProgressContext";

function App() {
  return (
    <CartProvider>
      <UserProgressProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </UserProgressProvider>
    </CartProvider>
  );
}

export default App;
