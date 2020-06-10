import React, { Component } from 'react'

// import component files
import BookList from './components/BookList'

import './App.css'

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>My Book List App</h1>
        <BookList />
      </div>
    )
  }
}

export default App
