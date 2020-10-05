import React, { Component } from 'react';
import './App.css'

class FilterOptions extends Component {
    render() {
        return (
            <form onSubmit={e => this.props.handleSubmit(e)}>
                <label>Search:</label>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search title or author"
                    value={this.props.search}
                    onChange={e => this.props.handleSearch(e.target.value)}
                />
                <label htmlFor="printType">Print Type:</label>
                <select
                    id="printType"
                    name="printType"
                    onChange={e => this.props.handlePrintTypeChange(e.target.value)}>
                    <option value="all">Select one:</option>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
                <label htmlFor="bookType">Book Type:</label>
                <select
                    id="bookType"
                    name="bookType"
                    onChange={e => this.props.handleBookTypeChange(e.target.value)}>
                    <option value="null">Select one:</option>
                    <option value="ebooks">All eBooks</option>
                    <option value="free-ebooks">Free eBooks</option>
                    <option value="full">Full (all text viewable)</option>
                    <option value="partial">Partial (some text viewable)</option>
                </select>
                <button type="submit">Submit!</button>
            </form>
        )
    }
}

export default FilterOptions;