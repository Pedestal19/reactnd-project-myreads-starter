import React, { Component } from 'react';
import './App.css';
import { Link} from 'react-router-dom'
import shelfs from './shelfs'
import * as BooksAPI from './BooksAPI'

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currently_reading: [],
      want_to_read: [],
      already_read: [],
      showLoading: 'none'
    }
    this.resetMain = this.resetMain.bind(this);
  }

  

  getAllBooks() {
    this.setState({showLoading: "block"});
    BooksAPI.getAll().then((books) => {
      console.log(books);

      var currently_reading = books.filter((book) => {return book.shelf === shelfs.currentlyReading});
      var want_to_read = books.filter((book) => {return book.shelf === shelfs.wantToRead});
      var already_read = books.filter((book) => {return book.shelf === shelfs.read});

      this.setState({
        currently_reading: currently_reading,
        want_to_read: want_to_read,
        already_read: already_read,
        showLoading: "none"
      });
    });
  }

  resetMain() {
    this.getAllBooks();
  }

  componentDidMount() {
    this.getAllBooks();
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{shelfs.currently_reading}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">{shelfs.want_to_read}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">{shelfs.already_read}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default MainPage
