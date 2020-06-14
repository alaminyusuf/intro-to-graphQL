import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

// import component files
import BookList from './components/BookList'
import AddBook from './components/AddBook'

import './App.css'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h1>My Book List App</h1>
            <BookList />
          </div>
          <AddBook />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
