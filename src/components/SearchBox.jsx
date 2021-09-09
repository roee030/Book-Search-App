import React from 'react';
import './SearchBox.css';
import searchIcon from '../assets/searchIcon.png';

const SearchBox = ({ setSearchfield, submitSearch }) => {
    return (
        <form onSubmit={(e) => submitSearch(e)} className='search-root'>
            <input
                className='search-input'
                placeholder='search book'
                onChange={(e) => setSearchfield(e.target.value)}
            />
            <img className="search-icon" src={searchIcon} alt={"searchIcon"} onClick={(e) => submitSearch(e)} />

        </form >
    );
}

export default SearchBox;