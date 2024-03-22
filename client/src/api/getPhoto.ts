import { Photo } from "../constants";
import axios from 'axios';

export const fetchPhotos = async (): Promise<Photo[]> => {
  try {
    const response = await axios.get<Photo[]>('https://picsum.photos/v2/list?page=1&limit=6');
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
};
