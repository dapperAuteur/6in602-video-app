import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import useMovie from '@/hooks/useMovie';
import AdiloEmbedWidget from '../../components/cousin/AdiloEmbedWidget';

// interface WatchProps {
//   media_link?: string;
// }

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const media_link = router.query.media_link;
  const title = router.query.title;
  console.log('watch-0/[movieId] movieId :>> ', movieId);
  // console.log('[movieId] media_link :>> ', media_link);
  console.log('media_link :>> ', media_link);

  const { data } = useMovie(movieId);
  // console.log('[movieId] data :>> ', data);
  
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <ArrowLeftIcon onClick={() => router.push('/')} className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition" />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span> {title}
        </p>
      </nav>
      <AdiloEmbedWidget dataId={'ehDCsFOY'} />
    </div>
  )
}

export default Watch;
