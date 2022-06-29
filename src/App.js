import "./App.css";
import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary/MealsSummary";
import React from "react";
import AvailableMeals from "./components/AvailableMeals/AvailableMeals";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Header></Header>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </CartContextProvider>
  );
}

export default App;
