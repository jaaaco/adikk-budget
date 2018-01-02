import React, { Component } from 'react'

export default class CategoryAdd extends Component {
  constructor (props) {
    super(props)
    this.state = {
      categoryName: ''
    }
  }

  onCategoryAdd = (event) => {
    event.preventDefault()
    if (this.state.categoryName.length > 0) {
      this.props.onCategoryAdd(this.state.categoryName)
      this.setState({ categoryName: '' })
    }
  }

  onNameChange = (event) => {
    this.setState({ categoryName: event.currentTarget.value })
  }

  render () {
    return (
      <form className="form-inline">
        <div className="form-group">
          <input value={this.state.categoryName} onChange={this.onNameChange} type="text" className="form-control" id="categoryName" placeholder="twoja nazwa" />
        </div>
        <button onClick={this.onCategoryAdd} type="submit" className="btn btn-primary">Dodaj</button>
      </form>
    )
  }
}
