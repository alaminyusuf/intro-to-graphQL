import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getBooksQuery } from '../queries/queries'

class BookList extends Component {
  displayBooks() {
    var data = this.props.data
    console.log(data)
    if (data.loading) {
      return <div>Loading...</div>
    } else {
      return data.books.map(book => {
        return <div key={book.id}>{book.name}</div>
      })
    }
  }
  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList)
