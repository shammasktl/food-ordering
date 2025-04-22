import Cart from "./components/Cart";
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
      </UserProgressProvider>
    </CartProvider>
  );
}

export default App;
