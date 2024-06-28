import React from 'react';

import Track from '../Track/Track';

function TrackList(props) {
    return (
        <div>
            <ul>
                {props.list?.map((track) => (
                    <Track 
                        key={track.id}
                        title={track.title} 
                        artist={track.artist}
                        album={track.album}
                        />
                ))}
            </ul>
        </div>
    );
}

export default TrackList;