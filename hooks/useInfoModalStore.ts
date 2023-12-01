import { create } from 'zustand';

export interface ModalStoreInterface {
  movieId?: string;
  isOpen: boolean;
  description?: string;
  media_link?: string;
  thumbnail_url?: string;
  title?: string;
  openModal: (
    movieId: string,
    description: string,
    media_link: string,
    thumbnail_url: string,
    title: string
    ) => void;
  closeModal: () => void;
}

const useInfoModalStore = create<ModalStoreInterface>((set) => ({
  movieId: undefined,
  isOpen: false,
  openModal: (
    description: string,
    media_link: string,
    movieId: string,
    thumbnail_url: string,
    title: string
    ) => set({ isOpen: true, movieId, description, media_link, thumbnail_url, title }),
  closeModal: () => set({ isOpen: false, movieId: undefined }),
}));

export default useInfoModalStore;
