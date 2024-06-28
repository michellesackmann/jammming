import React, { useState } from 'react';

import TrackList from '../Tracklist/TrackList';

function Playlist(props) {
    const { onSave } = props;
    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleClick = () => {
        onSave(name);
        setName('');
    }

    return (
        <div>
            <input
                value={name}
                placeholder='Give your playlist a name'
                onChange={handleNameChange}>
            </input>
            <TrackList 
                list={props.list} 
                onRemove={props.onRemove}
                />
            <button
                onClick={handleClick}>
                Save to spotify
            </button>
        </div>
    );
}

export default Playlist;