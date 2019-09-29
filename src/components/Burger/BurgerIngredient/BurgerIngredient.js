import React from "react";
import styles from "./BurgerIngredient.module.css";

const BurgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={styles.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={styles.BreadTop}>
          <div className={styles.Seeds1}></div>
          <div className={styles.Seeds2}></div>
        </div>
      );
    case "meat":
      ingredient = <div className={styles.Meet}></div>;
    case "cheese":
      ingredient = <div className={styles.Cheese}></div>;
    case "bacon":
      ingredient = <div className={styles.Bacon}></div>;
    case "salad":
      ingredient = <div className={styles.Salad}></div>;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default BurgerIngredient;
