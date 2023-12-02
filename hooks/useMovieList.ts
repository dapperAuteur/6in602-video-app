import useSwr from 'swr'
import { fetcher } from '@/libs/fetcher';

const useMovies = () => {
  const { data, error, isLoading } = useSwr(`
    {
      findMedia(limit: 100){
        count
      media{
        _id
        title
        media_link
        thumbnail_url
        description
        duration
        tag
      }
    }
  }
`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  // console.log('useMovies data :>> ', data);
  let media = data?.findMedia?.media;
  // console.log('useMovies media :>> ', media);
  return {
    media,
    error,
    isLoading
  }
};

export default useMovies;
