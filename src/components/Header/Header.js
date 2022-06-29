import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        ReactMeals <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src="meals.jpeg" alt="Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
