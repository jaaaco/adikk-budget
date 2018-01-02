import React, { Component } from 'react'
import './App.css'
import Category from './components/category'
import CategoryAdd from './components/categoryAdd'

class Cost extends Component {
  render () {
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

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      categories: [
        { name: 'Jedzenie poza domem' },
        { name: 'Alkohol' },
        { name: 'Paliwo' }
      ]
    }
  }

  onCategoryAdd = (categoryName) => {
    const categories = this.state.categories
    categories.push({ name: categoryName })
    this.setState({ categories: categories })
    // this.setState({ categories })
  }

  render () {
    const categories = []

    this.state.categories.forEach(function (category) {
      categories.push(<Category name={category.name}/>)
    })

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1>
              Kategorie
            </h1>
            <ul>
              {categories}
            </ul>
            <CategoryAdd onCategoryAdd={this.onCategoryAdd} />
          </div>
          <div className="col-md-4">
            <h1>Kwota</h1>
            <Cost/>
          </div>
          <div className="col-md-4">
            <h1>
              Moje wydatki
            </h1>
            <ul>
              <li>tutaj beda wydatki </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
