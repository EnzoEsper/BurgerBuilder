import React from "react";
import Auxiliar from "../../hof/Auxiliar";

class BurgerBuilder extends React.Component {
  render() {
    return (
      <Auxiliar>
        <div>Burger</div>
        <div>Build controls</div>
      </Auxiliar>
    );
  }
}

export default BurgerBuilder;
