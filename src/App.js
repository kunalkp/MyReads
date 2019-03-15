import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Library from "./components/Library";
import SearchBooks from "./components/SearchBooks";

class BooksApp extends React.Component {
  state = {
    myLibrary: []
  };

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll().then(myLibrary => {
      this.setState({ myLibrary });
    });
  };

  updateShelf = (bookToUpdate, updatedShelf) => {
    BooksAPI.update(bookToUpdate, updatedShelf).then(() => {
      bookToUpdate.shelf = updatedShelf;
      this.getAllBooks();
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => (
            <Library
              myLibrary={this.state.myLibrary}
              onUpdateShelf={this.updateShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              myLibrary={this.state.myLibrary}
              onUpdateShelf={this.updateShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
