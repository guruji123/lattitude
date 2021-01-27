import React, {Component} from 'react';
import ChildComponent from './childComponent.jsx';
// import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App container-fluid">
        <h1 className="products text-center">PRODUCTS</h1>
      
      <ChildComponent  />
      
    </div>       
  );
 }
}
export default App;
