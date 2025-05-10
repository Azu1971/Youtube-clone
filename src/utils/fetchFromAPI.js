import axios from "axios";

// const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';
  const API_KEY = 'AIzaSyBh3ggINXLvgosVYmq51iU62ZyP95_B2uE';

const options = {
    url: BASE_URL,
    params: {
      // maxResults: '1',
      maxResults: 25,
    },
    headers: {
      'x-rapidapi-key': 'AIzaSyBh3ggINXLvgosVYmq51iU62ZyP95_B2uE',
    //   'x-rapidapi-key': import.meta.env.RAPID_API_KEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };

  // export const fetchFromAPI = async (url) => {
  //   const {data} = await axios.get(`${BASE_URL}/${url}`, options);
  //   return data;
  // }


  

  export const fetchFromAPI = async (url) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${url}&key=${API_KEY}`);
      return data;
    } catch (error) {
      console.error('Error fetching from YouTube API:', error);
      throw error;
    }
  };