import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery, placeholder}) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">{placeholder}</span>
        </label>
        <input
            className="search-input"
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder={placeholder}
            name="search"
        />
    </form>
);

export default SearchBar;