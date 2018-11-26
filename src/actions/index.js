import axios from 'axios';

export const FETCH_GIF = 'FETCH_GIF'

const API_KEY = 'ggYrHfBJkzUQZt7gchlKVQgFruYItIjm';
const URL = `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=24`;
export function fetchGif() {
  const request = axios.get(URL);
  console.log('from action ', request);

  return {
    type: FETCH_GIF,
    payload: request
  }
}
