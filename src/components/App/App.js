import React, { useState } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../Utils/Spotify';

const tracksStatic = [
  {
    id: 0,
    title: 'Juice',
    artist: 'Blæst',
    album: 'Vind',
    uri: 'lsdkjflisjd',
  },
  {
    id: 1,
    title: 'Ego',
    artist: 'Blæst',
    album: 'Vind',
    uri: 'lsdkj',
  },
  {
    id: 2,
    title: 'Falling',
    artist: 'Harry Styles',
    album: 'Fine Line',
    uri: 'lflisjd',
  },
]

function App() {
  const [tracks, setTracks] = useState(tracksStatic);
  const [playlist, setPlaylist] = useState([]);

  const handleSubmit = async (term) => {
    console.log(`Searching for songs related to ${term}`);
    setTracks(await Spotify.search(term));
}

  const addTrackToPlayList = (trackToAdd) => {
    setPlaylist((prevList) => {
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

    const removeTrackFromPlaylist = (trackToRemove) => {
      setPlaylist((prevList) => {
        return prevList.filter((track) => track.id !== trackToRemove.id)
      });
    }

    const savePlaylistToSpotiy = (name) => {
      console.log(`Saving playlist to spotify`);
      const uris = [];
      for (let obj in playlist) {
          uris.push(playlist[obj]['uri']);
      }
      Spotify.savePlaylist(name, uris);
      setPlaylist([]);
  }

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit}/>
      <SearchResults 
        results={tracks}
        onAdd={addTrackToPlayList}
      />
      <Playlist 
        list={playlist}
        onRemove={removeTrackFromPlaylist}
        onSave={savePlaylistToSpotiy}
      />
    </div>
  );
}

export default App;
