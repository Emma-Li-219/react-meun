import React, { Component } from 'react';
import './App.css';
import MenuCategories from './containers/MenuCategories';
import ItemsInCategory from './containers/ItemsInCategory';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Route path='/' component={MenuCategories}></Route>
        <Route path='/items/:short_name' component={ItemsInCategory}></Route>
      </div>
    );
  }
}

export default App;
