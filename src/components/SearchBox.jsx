import React from 'react';

const SearchBox = ({ setSearchfield, submitSearch }) => {
    return (
        <form onSubmit={(e) => submitSearch(e)} className=''>
            <input
                className=''
                type='search'
                placeholder='search book'
                onChange={(e) => setSearchfield(e.target.value)}
            />
            <button>
                Search
            </button>
        </form >
    );
}

export default SearchBox;