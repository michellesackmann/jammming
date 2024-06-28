import React, { useState } from 'react';

const SearchBar = () => {
    const [term, setTerm] = useState('');
    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Searching for songs related to ${term}`);
        setTerm('');
    }

    return (
        <form>
            <input
                placeholder="Search songs"
                value={term}
                onChange={handleChange}>
            </input>
            <button
                onClick={handleSubmit}>
                Search
            </button>
        </form>
    );
}

export default SearchBar;