import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Shelf from "./Shelf";

class Library extends Component {
  render() {
    const shelfDetails = [
      {
        name: "currentlyReading",
        title: "Currently Reading"
      },
      {
        name: "wantToRead",
        title: "Want to Read"
      },
      {
        name: "read",
        title: "Read"
      }
    ];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelfDetails.map(shelf => (
            <div className="bookshelf" key={shelf.name}>
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books">
                <Shelf
                  changeBookShelf={this.props.onUpdateShelf}
                  books={this.props.myLibrary.filter(
                    book => book.shelf === shelf.name
                  )}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

Library.propTypes = {
  myLibrary: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired,
};

export default Library;
