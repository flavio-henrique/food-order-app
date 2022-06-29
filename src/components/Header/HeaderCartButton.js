import classes from "./HeaderCartButton.module.css";
import CartIcon from "../UI/CartIcon/CartIcon";
import Modal from "../UI/Modal/Modal";
import React, { useRef, useState, useEffect, useContext } from "react";
import CartItem from "../CartItem/CartItem";
import CartContext from "../../store/CartContext";

const HeaderCartButton = () => {
  const [showModal, setShowModal] = useState(false);
  const ctx = useContext(CartContext);

  const button = useRef();

  const onClickHandler = () => {
    setShowModal(true);
  };
  const onCloseHandler = () => {
    setShowModal(false);
  };


  useEffect(() => {
    if(ctx.items.length > 0) {
      button.current.classList.add(classes.bump);
      setTimeout(() => button.current.classList.remove(classes.bump), 200);
    }
  }, [ctx]);

  console.log("teste")
 

  return (
    <React.Fragment>
      <Modal onClose={onCloseHandler} showModal={showModal}>
        <ul>
          {ctx.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              increaseAmount={ctx.increaseAmount}
              decreaseAmount={ctx.decreaseAmount}
              id={item.id}
            ></CartItem>
          ))}
        </ul>
      </Modal>
      <div ref={button} onClick={onClickHandler} className={classes.button}>
        <div className={classes.icon}>
          <CartIcon />
        </div>
        Your Cart
        <span className={classes.badge}>
          {ctx.items
            .map((item) => item.amount)
            .reduce((prev, current) => prev + current, 0)}
        </span>
      </div>
    </React.Fragment>
  );
};

export default HeaderCartButton;
