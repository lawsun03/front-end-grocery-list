import React from 'react';
import groceriesData from '../data/groceriesData.js';
import GroceryList from './GroceryList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        groceries: groceriesData,
        name:'',
        quantity:''
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(event) {
    event.persist();
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value
    });

  }


  handleSubmit(event) {
   event.preventDefault();

    var newItem = {
      name: this.state.name,
      quantity: this.state.quantity
     }

    this.setState({
      groceries: [... this.state.groceries, newItem]
    });

 }



  render() {
    return(
  <div>
    <img src="grocery-bags.png" />
    <h1>Grocery List</h1>
    <form onSubmit={this.handleSubmit}>
      <label> Item
        <input name="name" value={this.state.name} onChange={this.handleChange} />
      </label>
      <label> Quantity
        <input name="quantity" value={this.state.value} onChange={this.handleChange} />
      </label>
      <button>Add Grocery</button>
      <GroceryList groceries={this.state.groceries}/>
    </form>
  </div>
  )
  }
};

export default App;