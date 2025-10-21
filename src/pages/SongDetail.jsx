import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BackButton } from '../components/BackButton';
import { AudioPlayerEmbed } from '../components/AudioPlayerEmbed';

export const SongDetail = () => {
  const { title } = useParams();
  const [song, setSong] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/gimi_bappa_nasiru.json`)
      .then(response => response.json())
      .then(data => {
        const foundSong = data.find(s => s.title === decodeURIComponent(title));
        setSong(foundSong);
      })
      .catch(error => console.error('Error fetching song details:', error));
  }, [title]);

  if (!song) {
    return <div className="p-7 text-center text-gray-700">Loading or song not found...</div>;
  }

  return (



    <main className="bg-gray-50 dark:bg-gray-900">

      {/* Top Half */}
      <section className="max-w-7xl mx-auto p-4 md:p-7">
        <BackButton />
        <div className="flex flex-wrap lg:flex-nowrap rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800">
          {/* Left: Image */}
          {/* On small screens, this is full-width. On medium screens and up, it takes half the width. */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-4">
            <img className="max-h-full max-w-full object-contain rounded-md" src={song.image} alt={song.title} />
          </div>

          {/* Right: Song Details */}
          {/* On small screens, this is full-width. On medium screens and up, it takes half the width. */}
          <div className="w-full md:w-1/2 p-6 overflow-y-auto text-gray-700 dark:text-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{song.title}</h1>
            <p className="mb-4 text-base md:text-lg">{song.overview}</p>

            {song.genres && (
              <div className="mb-6 flex flex-wrap gap-2">
                {song.genres.map((genre) => (
                  <span key={genre.id} className="border border-gray-300 dark:border-gray-600 rounded-full px-3 py-1 text-sm">
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center mb-4">
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="ml-2 font-semibold">{song.vote_average}</p>
              <span className="w-1 h-1 mx-2 bg-gray-400 dark:bg-gray-600 rounded-full" />
              <span className="text-gray-600 dark:text-gray-400">{song.vote_count} reviews</span>
            </div>

            <div className="space-y-2 text-gray-800 dark:text-gray-300">
              <p><strong>Artist:</strong> {song.artist}</p>
              <p><strong>Language:</strong> {song.language}</p>
              <p><strong>Category:</strong> {song.category}</p>
              <p><strong>Release Date:</strong> {song.date_created}</p>
              <p>
                <strong>IMDB Code:</strong>{' '}
                <a href={`https://www.imdb.com/title/${song.imdb_id}`} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  {song.imdb_id}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Audio Player */}

      {/* <section className="max-w-7xl mx-auto p-4 md:p-7">
      <div className="rounded-lg shadow-lg overflow-hidden">
        
          <iframe
            src={`https://audiomack.com/embed/nasmang/song/${song.audiomack}`}
            width="100%"
            height="252"
            title="SAANIRGOL"
            className="w-full"
          ></iframe>
        
      </div>
    </section> */}

      <section className="max-w-7xl mx-auto p-4 md:p-7">
        <AudioPlayerEmbed
          songurl={`https://audiomack.com/embed/nasmang/song/${song.audiomack}`}
        />
      </section>


      {/* Bottom Half */}
      <section className="max-w-7xl mx-auto p-4 md:p-7">
        <div className="flex flex-wrap rounded-lg shadow-lg overflow-hidden">
          {/* Fulfulde Lyrics */}
          {/* On small screens, this is full-width. On medium screens and up, it takes half the width. */}
          <div className="w-full md:w-1/2 p-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <h2 className="text-2xl font-bold mb-4">Tonngi</h2>
            <p className="whitespace-pre-line leading-relaxed">{song.lyrics_fulfulde}</p>
          </div>

          {/* English Lyrics */}
          {/* On small screens, this is full-width. On medium screens and up, it takes half the width. */}
          <div className="w-full md:w-1/2 p-6 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
            <h2 className="text-2xl font-bold mb-4">Lyrics</h2>
            <p className="whitespace-pre-line leading-relaxed">{song.lyrics_english}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

