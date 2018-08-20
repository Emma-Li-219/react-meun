import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './MenuCategories.css';

class MenuCategories extends Component {
    state = {
        MenuLists:[]
    }
  componentDidMount() {
      axios.get('https://davids-restaurant.herokuapp.com/categories.json')
      .then(response => {
        //   console.log(response.data);
          this.setState({MenuLists: response.data})
      })
  }
  render() {
    const datalist = this.state.MenuLists.map(
        data => {
            return <Link key={data.id} to={'/items/' + data.short_name}><li >{data.name}-({data.short_name})</li></Link>
        }
    )
    return (
        <div className='col-md-4'>
            <h2>Menu Categories</h2>
            <ul>
                {datalist}
            </ul>
        </div>
    );
  }
}

export default MenuCategories;