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
          <input type="text" className="form-control" id="categoryName" placeholder="twoja nazwa" />
        </div>
        <button type="submit" className="btn btn-primary">Dodaj</button>
      </form>
    )
  }
}

class Cost extends Component {
  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <input type="text" className="form-control" id="amountOfMoney" placeholder="kwota pieniędzy" />
        </div>
        <button type="submit" className="btn btn-success">Zatwierdź</button>
      </form>
    )
  }
}

const myCategories = [
  { name: 'Jedzenie poza domem' },
  { name: 'Alkohol' },
  { name: 'Paliwo' },
]

class App extends Component {
  render() {
    const categories = []

    myCategories.forEach(function(category) {
      categories.push(<Category name={category.name}/>)
    })

    return (
      <div className="container">
        <div class="row">
          <div class="col-md-4">
            <h1>
              Kategorie:
            </h1>
            <ul>
              {categories}
            </ul>
            <CategoryAdd/>
          </div>
          <div class="col-md-4">
            <h1>Kwota:</h1>
            <Cost/>
          </div>
          <div class="col-md-4">
            <h1>
              Moje wydatki:
            </h1>
            <ul>
              {categories}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
