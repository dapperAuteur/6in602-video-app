export interface MovieInterface {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  media_link: string;
  duration: string;
  genre: string;
  tags: string[];
}

export interface MediaInterface {
  _id: string;
  title: string;
  description: string;
  duration: string;
  genre: string;
  tags: string[];
  performers: string;
  media_link: string;
  thumbnail_url: string;
  media_type: string;
}
