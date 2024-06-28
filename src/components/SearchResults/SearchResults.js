import React from 'react';

import TrackList from '../Tracklist/TrackList';

function SearchResults(props) {
    return (
        <div>
            <h1>Results</h1>
            <TrackList 
                list={props.results}
                isAdd={true}
                onAdd={props.onAdd}/>
        </div>
    );
}

export default SearchResults;