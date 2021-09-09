import React from 'react'
import SearchBox from './SearchBox';
import './Header.css'
const Header = ({ setSearchfield, submitSearch }) => {
    return (
        <div className="header-root">
            <SearchBox setSearchfield={setSearchfield} submitSearch={submitSearch} />

        </div>
    )
}

export default Header
