import React, { useCallback } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

import PlayButton from '@/components/PlayButton';
import useBillboard from '@/hooks/useBillboard';
import useInfoModalStore from '@/hooks/useInfoModalStore';
import { MediaInterface } from '@/types';

interface MovieListProps {
  media: MediaInterface[];
  title: string;
  media_link: string;
}

const Billboard: React.FC = () => {
  const { openModal } = useInfoModalStore();
  const { media } = useBillboard();

  // convert id to _id
  // console.log('media :>> ', media);
  const handleOpenModal = useCallback(() => {
    openModal(
      media?._id,
      media?.description,
      media?.media_link,
      media?.thumbnail_url,
      media?.title
      );
  }, [openModal, media?._id]);



  return (
    <div className="relative h-[56.25vw]">
      <video poster={media?.thumbnail_url} className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500" autoPlay muted loop src={media?.media_link}></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {media?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {media?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          {/* <PlayButton movieId={media?._id} media_link={media?.media_link} title={media?.title} />
          <button
            onClick={handleOpenModal}
            className="
            bg-white
            text-white
              bg-opacity-30 
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
            "
            >
              <InformationCircleIcon className="w-4 md:w-7 mr-1" />
              More Info
          </button> */}
        </div>
      </div>
    </div>
  )
}
export default Billboard;
