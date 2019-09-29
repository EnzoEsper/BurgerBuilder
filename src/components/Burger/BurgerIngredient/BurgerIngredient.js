import React from "react";
import PropTypes from "prop-types";

import styles from "./BurgerIngredient.module.css";

class BurgerIngredient extends React.Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
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
  }
}

// Adding type validation for the component, so if we ever try to
// use the ingredient component without passing a type we will get an error
BurgerIngredient.prototypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
