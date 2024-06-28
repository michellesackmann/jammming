import React, { useState, useEffect } from 'react';

import TrackList from '../Tracklist/TrackList';

function Playlist(props) {
    const [list, setList] = useState([]);
    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const addTrackToList = (trackToAdd) => {
        setList((prevList) => {
            const inList = prevList.some(track => {
                return track.id === trackToAdd.id;
            });
            if(!inList) {
                return [trackToAdd, ...prevList];
            } else {
                return prevList;
            }
        });
    }

    useEffect(() => {

    }, [list]);

    const handleSubmit = (event) => {
        console.log(`Saving playlist to spotify`);
        setList([]);
        setName('');
    }

    return (
        <div>
            <input
                value={name}
                placeholder='Give your playlist a name'
                onChange={handleNameChange}>
            </input>
            <TrackList list={list}/>
            <button
                onClick={handleSubmit}>
                Save to spotify
            </button>
        </div>
    );
}

export default Playlist;