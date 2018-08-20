import React, { Component } from "react";
import axios from "axios";
class ItemsInCategory extends Component {
  state = {
    items: [],
    category: ""
  };

  componentDidMount() {
    axios
      .get(
        "https://davids-restaurant.herokuapp.com/menu_items.json?category=" +
          this.props.match.params.id
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          items: response.data.menu_items,
          category: this.props.match.params.short_name
        });
      });
  }

  componentDidUpdate() {
    if (this.state.category !== this.props.match.params.short_name) {
      axios
        .get(
          "https://davids-restaurant.herokuapp.com/menu_items.json?category=" +
            this.props.match.params.short_name
        )
        .then(response => {
          console.log(response.data);
          this.setState({
            items: response.data.menu_items,
            category: this.props.match.params.short_name
          });
        });
    }
  }

  render() {
    const items = this.state.items.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.description}</td>
        </tr>
      );
    });
    return (
      <div className='col-md-8'>
        <p>
          {" "}
          <strong>Items in Category: ({this.state.category})</strong>
        </p>
        <table className='table table-condensed table-striped table-bordered'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </table>
      </div>
    );
  }
}
export default ItemsInCategory;
