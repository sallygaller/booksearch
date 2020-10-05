import React from 'react';
import './App.css'

export default function Book(props) {
    const authors = props.volumeInfo.authors.toString();
    return (
            <li>
                <p className="bookTitle">{props.volumeInfo.title}:<br></br>
                {props.volumeInfo.subtitle}</p>
                <p className="author">Author(s): {authors}</p>
                <p className="description">{props.volumeInfo.description}</p>
            </li>
    )
}