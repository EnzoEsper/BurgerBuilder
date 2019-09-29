import React from "react";
import Auxiliar from "../../hof/Auxiliar";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends React.Component {
  render() {
    return (
      <Auxiliar>
        <Burger />
        <div>Build controls</div>
      </Auxiliar>
    );
  }
}

export default BurgerBuilder;
