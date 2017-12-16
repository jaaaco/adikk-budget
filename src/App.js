import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Category extends Component {
  render() {
    return (
      <li> {this.props.name} </li>
    )
  }
}

class CategoryAdd extends Component {
  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <label className="sr-only" htmlFor="categoryName">Nazwa kategorii</label>
          <input type="text" className="form-control" id="categoryName" placeholder="twoja nazwa" />
        </div>
        <button type="submit" className="btn btn-default">Dodaj</button>
      </form>
    )
  }
}

const myCategories = [
  { name: 'Jedzenie poza domem' },
  { name: 'Alkohol' },
  { name: 'Paliwo 2' },
]

class App extends Component {
  render() {
    const categories = []

    myCategories.forEach(function(category) {
      categories.push(<Category name={category.name}/>)
    })

    return (
      <div className="container">
        <h1>
          Moje kategorie
        </h1>
        <ul>
          {categories}
        </ul>
        <CategoryAdd/>
      </div>
    )
  }
}

export default App;
