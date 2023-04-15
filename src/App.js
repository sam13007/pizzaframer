import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Navbar, Base, Toppings, Notfound, Order } from "./components";
import { useState } from "react";
function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };
  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((top) => top !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/base"
          element={<Base pizza={pizza} addBase={addBase} />}
        />
        <Route
          path="/toppings"
          element={<Toppings addTopping={addTopping} pizza={pizza} />}
        />
        <Route path="/order" element={<Order pizza={pizza} />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
