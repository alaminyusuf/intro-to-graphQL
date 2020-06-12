import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const getBookQuery = gql`
  {
    books {
      name
      id
    }
  }
`

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

export default graphql(getBookQuery)(BookList)
