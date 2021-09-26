import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div>
      <Route exact path="/" component={ MainPage } />
      <Route exact path="/search" component={ SearchPage } />
      <Route path="/book/:id" component={ BookPage } />
    </div>
    );
}

export default BooksApp
