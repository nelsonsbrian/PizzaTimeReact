import React from 'react';
import CrustList from './CrustList';
import SauceList from './SauceList';
import ToppingsList from './ToppingsList';
import CurrentPizza from './CurrentPizza';

function PizzaTable(props) {
  return (
    <div>
      <CrustList 
        masterCrustList={props.masterIngredientList.masterCrustList} 
        addCrustToCurrentPizza={props.addCrustToCurrentPizza}
      />
      <hr />
      <SauceList 
        masterSauceList={props.masterIngredientList.masterSauceList} 
        addSauceToCurrentPizza={props.addSauceToCurrentPizza}
      />
      <hr />
      <ToppingsList 
        masterToppingsList={props.masterIngredientList.masterToppingsList} 
        addToppingsToCurrentPizza={props.addToppingsToCurrentPizza}
        removeToppingsToCurrentPizza={props.removeToppingsToCurrentPizza}        
      />
      <hr />
      {/* {console.log("pizzatable comp", props)} */}
      <CurrentPizza
        getCrustName={props.getCrustName}
        getSauceName={props.getSauceName}
        getToppingName={props.getToppingName}
        currentPizza={props.currentPizza}
        removeToppingsToCurrentPizza={props.removeToppingsToCurrentPizza}  
        handleMatchPizza={props.handleMatchPizza}       
      />
    </div>
  );
}

export default PizzaTable;