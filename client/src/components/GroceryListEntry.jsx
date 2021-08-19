import React from 'react';

const GroceryListEntry = (props) => (
      <li>
        <span>{props.grocery.name} - </span>
        <span>{props.grocery.quantity}</span>
      </li>
    );




export default GroceryListEntry;



