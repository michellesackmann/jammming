import React, { useState } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

const tracksStatic = [
  {
    id: 0,
    title: 'Juice',
    artist: 'Blæst',
    album: 'Vind'
  },
  {
    id: 1,
    title: 'Ego',
    artist: 'Blæst',
    album: 'Vind'
  },
  {
    id: 2,
    title: 'Falling',
    artist: 'Harry Styles',
    album: 'Fine Line'
  },
]

function App() {
  const [tracks, setTracks] = useState(tracksStatic);

  return (
    <div className="App">
      <SearchBar />
      <SearchResults results={tracks}/>
      <Playlist />
    </div>
  );
}

export default App;
