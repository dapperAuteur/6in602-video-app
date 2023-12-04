import React from 'react';
// import { NextPageContext } from 'next';
// import { getSession } from 'next-auth/react';
import { fetcher } from '@/libs/fetcher';
import useSWR from 'swr';

import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import InfoModal from '@/components/InfoModal';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';
import useInfoModalStore from '@/hooks/useInfoModalStore';

// export async function getServerSideProps(context: NextPageContext) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/auth',
//         permanent: false,
//       }
//     }
//   }

//   return {
//     props: {}
//   }
// }

const findMedia = `
  findMedia{
    media{
      _id
      title
      media_link
      thumbnail_url
      description
      externalMediaFile
    }
  }
`

const Home = () => {
  const { media: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const {isOpen, closeModal} = useInfoModalStore();
  // console.log('Home movies :>> ', movies);

  const MenuItems = [
    {
      name: 'For Hire',
      href: '/for-hire'
    },
    {
      name: 'FAQ',
      href: '/faq'
    },
    {
      name: 'Sports',
      href: '/sports'
    },
    {
      name: 'Live Music',
      href: '/live-music'
    },
    {
      name: 'Media List',
      href: '/media-list'
    },
    {
      name: 'GroWitUS',
      href: 'gro-wit-us'
    },
    {
      name: 'Dashboard',
      href: 'dashboard'
    }
  ]

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar menuItems={MenuItems} />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
      </div>
    </>
  )
}

export default Home;
