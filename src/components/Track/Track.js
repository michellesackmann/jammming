import React from 'react';

function Track(props) {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.artist} | {props.album}</p>
            <button
            >+</button>
        </div>
    );
}

export default Track;