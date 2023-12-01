import useSwr from 'swr'
import { fetcher } from '@/libs/fetcher';

const queryRandomMedia = `
  findRandomMedia(
    limit: 1){
    media{
      _id
      title
      media_link
      thumbnail_url
      description
    }
  }
`
let limit = 1
const useBillboard = () => {
  const { data, error, isLoading } = useSwr(`{ findRandomMedia(limit: ${limit}){ media{ _id, title, media_link, thumbnail_url, description } } }`, fetcher, { 
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
   });
  //  console.log('data :>> ', data);
   let media = data?.findRandomMedia?.media[0];
  //  console.log('media :>> ', media);
  return {
    media,
    error,
    isLoading
  }
};

export default useBillboard;
