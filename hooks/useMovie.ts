import useSwr from 'swr'
import { fetcher } from '@/libs/fetcher';

const useMovie = (_id?: string) => {
  // console.log('useMovie _id :>> ', _id);
  const { data, error, isLoading } = useSwr(_id ? `findMediaByID(
    _id: ${_id}){
      _id
      title
      media_link
      thumbnail_url
      description
  }` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  let media = data?.findMediaByID;
  // console.log('useMovie media :>> ', media);

  return {
    data,
    error,
    isLoading
  }
};

export default useMovie;
