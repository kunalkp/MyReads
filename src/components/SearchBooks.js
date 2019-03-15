import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Shelf from "./Shelf";
import * as BooksAPI from "../BooksAPI";
import DebounceInput from "react-debounce-input";

class SearchBooks extends Component {
  state = {
    query: "",
    searchResults: [],
    searchError: false
  };

  updateQuery = q => {
    this.setState({
      searchResults: [],
      query: q
    });
    BooksAPI.search(q, 20).then(searchedBooks => {
      const libraryBooks = this.props.myLibrary;
      if (searchedBooks === undefined) {
        this.setState({ searchResults: [], searchError: true });
      } else if (searchedBooks !== undefined && searchedBooks !== null) {
        if (searchedBooks.error && searchedBooks.error === "empty query") {
          this.setState({ searchResults: [], searchError: true });
        } else {
          libraryBooks.forEach(libraryBook => {
            searchedBooks.forEach(book => {
              book.shelf === undefined && (book.shelf = "none");
              if (book.id === libraryBook.id) {
                book.shelf = libraryBook.shelf;
              }
            });
          });
          this.setState({ searchResults: searchedBooks, searchError: false });
        }
      }
    });
  };

  render() {
    const { query, searchResults } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              placeholder="Search by title or author"
              debounceTimeout={500}
              element="input"
              type="text"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.searchResults.length > 0 && (
            <Shelf
              changeBookShelf={this.props.onUpdateShelf}
              books={searchResults}
            />
          )}
          {this.state.searchError && <p> No Results Found </p>}
        </div>
      </div>
    );
  }
}

SearchBooks.propTypes = {
  myLibrary: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired
};

export default SearchBooks;
