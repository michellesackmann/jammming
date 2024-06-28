import React, { useState } from 'react';

const SearchBar = (props) => {
    const { onSubmit } = props;
    const [term, setTerm] = useState('');
    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
        setTerm('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Search songs"
                value={term}
                onChange={handleChange}>
            </input>
            <button type="submit">
                Search
            </button>
        </form>
    );
}

export default SearchBar;