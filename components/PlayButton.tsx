import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

interface PlayButtonProps {
  movieId: string;
  media_link: string;
  title: string;
  description: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId, media_link, title, description }) => {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push({
        pathname: `/watch/${movieId}?`,
        query: {
          media_link: media_link,
          title: title,
          description: description,
        },
      })}
      className="
        bg-white 
        rounded-md 
        py-1 md:py-2 
        px-2 md:px-4
        w-auto 
        text-xs lg:text-lg 
        font-semibold
        flex
        flex-row
        items-center
        hover:bg-neutral-300
        transition
        "
      >
        <PlayIcon className="w-4 md:w-7 text-black mr-1" />
        Play
    </button>
  );
}

export default PlayButton;
