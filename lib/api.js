import axios from 'axios';

const UNSPLASH_ACCESS_KEY = '2dvaMK_s6fwsojGUqWX1UgzVwsM-SGSMM4jYJ8gxdaE'; // Replace with your Unsplash API key

export const fetchItems = async () => {
  const response = await axios.get(`https://api.unsplash.com/photos/?client_id=${UNSPLASH_ACCESS_KEY}`);
  return response.data.map(photo => ({
    id: photo.id,
    title: photo.description || photo.alt_description || 'No Title Provided',
    description: photo.alt_description || 'No Description Available',
    image: photo.urls.small,
  }));
};
