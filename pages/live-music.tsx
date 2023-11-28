import React from 'react'
import { MovieInterface } from '@/types';
import { useState, useEffect } from 'react';
import MovieCard from '@/components/MovieCard';
import Link from 'next/link';

interface LiveMusicProps {
  data: MovieInterface[];
  title: string;
}

const LiveMusic: React.FC<LiveMusicProps> = () => {

  const [media, setMedia] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/movies')
      .then((res) => res.json())
      .then((media) => {
        setMedia(media)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!media) return <p>No Media Yet</p>
  // let medias = media?.medias;
  // console.log('media :>> ', media);

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <Link href='/'>
        <div className='text-center text-white text-3xl'>Live Music</div>
      </Link>
      <div>
        <div className="grid grid-cols-4 gap-2">
          {media.map((movie) => {
            // console.log('movie :>> ', movie);
            return (
            <MovieCard key={movie.id} data={movie} />
          )})}
        </div>
      </div>
    </div>
  )
}

export default LiveMusic