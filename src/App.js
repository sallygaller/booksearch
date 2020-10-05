import React, { Component } from 'react';
import './App.css';
import BookList from './BookList';
import FilterOptions from './FilterOptions';

class App extends Component {
      constructor(props) {
          super(props);
          this.state = {
              books: [],
              search: "",
              printType: "all",
              bookType: "ebooks"
          };
      }

      newSearch(searchTerm) {
        this.setState({
          search: searchTerm
        })
      }

      setBookType(value) {
        this.setState({
          bookType: value
      })
    }

      setPrintType(value) {
        console.log(value)
          this.setState({
          printType: value
      })
    }

      handleSubmit(e) {
        e.preventDefault();
        console.log("search initiated!");
        console.log(this.state.search);
        const printTypeSelect = this.state.printType;
        const bookTypeSelect = this.state.bookType;
        const apiKey = "example"
        const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&printType=${printTypeSelect}&bookType=${bookTypeSelect}&key=${apiKey}`;
        const options = {
          method: 'GET',
        }

        fetch(url, options)
          .then(response => {
            if(!response.ok) {
              throw new Error('Something went wrong! Please try again later.');
            }
            return response;
          })
          .then(response => response.json())
          .then(data => {
            const books = data.items
            console.log(books)
            this.setState({
            books: data.items
            })
            console.log(this.state)
          })
          .catch(err => {
            console.log(err.message)
          })
      }
  
      render() {
          return (
              <div>
                  <h2>Look for a book!</h2>
                  <FilterOptions 
                    books={this.state.books}
                    handleSubmit={e => this.handleSubmit(e)}
                    handleSearch={value => this.newSearch(value)}
                    handleBookTypeChange={value => this.setBookType(value)}
                    handlePrintTypeChange={value => this.setPrintType(value)} />
                  <BookList books={this.state.books} printType={this.state.printType} bookType={this.state.bookType}/>
              </div>
          )
      }
  }

export default App;
