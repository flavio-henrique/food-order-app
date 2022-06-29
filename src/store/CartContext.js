import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  add: (item) => {},
  remove: (id) => {},
  increaseAmount: (id) => {},
  decreaseAmount: (id) => {},
});

const increment = (id) => {
  return (item) => {
    if (item.id !== id) {
      return item;
    } else {
      return { ...item, amount: ++item.amount };
    }
  };
};

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);


  const add = (newItem) => {
    setItems((prevItemArray) => {
      if (prevItemArray.some((prevItem) => newItem.id === prevItem.id)) {
        return prevItemArray.map((item) => {
          if(item.id === newItem.id) {
            return { ...item, amount: item.amount + (+newItem.amount) }
          }
          return item;
        });
      }
      return [...prevItemArray, newItem];
    });
  };

  const remove = (id) => {
    setItems((previousItems) => {
      return previousItems.filter((item) => item.id !== id);
    });
  };
  
  const increaseAmount = (id) => {
    setItems((previousItems) => {
      return previousItems.map(increment(id));
    });
  };

  const decreaseAmount = (id) => {
    setItems((previousItems) => {
      return previousItems.map((item) => {
        if (item.id !== id || item.amount === 0) {
          return item;
        } else {
          return { ...item, amount: --item.amount };
        }
      });
    });
  };
  return (
    <CartContext.Provider
      value={{ items, add, remove, increaseAmount, decreaseAmount }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
