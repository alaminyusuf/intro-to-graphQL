import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

// import component files
import BookList from './components/BookList'
import './App.css'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div style={{ textAlign: 'center' }}>
          <h1>My Book List App</h1>
          <BookList />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
