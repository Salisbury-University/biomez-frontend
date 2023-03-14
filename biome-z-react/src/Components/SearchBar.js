import React, { useState } from 'react';

function SearchBar(props) {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            props.handleSearch(query);
        }
    };

    return (
        <div className="searchBar">
            <input
                className="searchText"
                type="text"
                value={query}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
        </div>
    );
}

export default SearchBar;
