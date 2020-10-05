import React, { Component } from 'react';
import Book from './Book'

class BookList extends Component {
    render() {
        const books = this.props.books
        .map((book, i) => <Book {...book} key={i}/>)
    return(
        <div>
            <ol>
            {books}
            </ol>
        </div>
    )
    }
}

BookList.defaultProps = {
    books: []
};

export default BookList;