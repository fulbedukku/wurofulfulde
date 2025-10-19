import { useEffect, useState } from 'react';
import { SongCard } from '../components';

export const SongList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('/wurofulfulde/gimi_bappa_nasiru.json')
      .then(response => response.json())
      .then(data => setSongs(data))
      .catch(error => console.error('Error fetching songs:', error));
  }, []);

  return (
    <main>
      <section className="max-w-7xl mx-auto p-7 bg-gray-100 py-10">
        
        <div className="flex justify-start flex-wrap">
          {songs.map(song => (
            <SongCard key={song.title} song={song} />
          ))}
        </div>
      </section>
    </main>
  );
};