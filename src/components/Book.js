import React from 'react';
import { Link } from 'react-router-dom';

const currentlyReading = "Currently Reading";
const wantToRead = "Want To Read";
const read = "Read";
const none = "None";

class Book extends React.Component {
  currentShelfName() {
    switch(this.props.book.shelf) {
      case "currentlyReading":
        return currentlyReading;
      case "wantToRead":
        return wantToRead;
      case "read":
        return read;
      case "none":
        return none;
      default:
        return none;
    }
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 150, height: 200, backgroundImage: `url("${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail || ""}")` }}></div>
            <div className="book-shelf-changer">
              <select value={this.props.book.shelf || "none"} onChange={(event) => { this.props.updateBook(this.props.book, event.target.value) }}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title"><Link to={"/book/" + this.props.book.id}>{this.props.book.title}</Link></div>
          <div className="book-authors">{this.props.book.authors && this.props.book.authors[0] || "No Author..."}</div>
          <div className="book-authors">{this.currentShelfName()}</div>
        </div>
      </li>
    );
  }
}



export default Book;
