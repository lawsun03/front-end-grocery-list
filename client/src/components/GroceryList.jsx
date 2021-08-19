import React from 'react';
import GroceryListEntry from './GroceryListEntry.jsx';

const GroceryList = (props) => (

    <ul className="groceries">
      {props.groceries.map((grocery,i) =>
      (<GroceryListEntry grocery={grocery} key={i}/>)
      )}
    </ul>

);


export default GroceryList;

