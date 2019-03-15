# MyReads Project

MyReads project is a Book Tracking App which will let you keep track of your personal library. It is built using React and API by Udacity.

## Installation

To run the project, use these two commands via terminal:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Use
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books.

#### Shelves
1. Currently Reading
2. To Read
3. Read

The main page also has a link to a search page that allows you to find books to add to your library.
When a book is on a bookshelf, it will have the same state on both the main application page and the search page.
The search page also has a link to the main page.
When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

## Backend Server

Udacity provided a backend server. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

### `getAll`

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
