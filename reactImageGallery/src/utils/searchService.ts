import axios from "axios";
import { useQuery } from "react-query";

interface UnsplashData {
  id: string;
  urls: {
    small: string;
  };
}

interface valueProps{
    input:string,
    LIMIT:number,
    page:number

}

const searchService = async (pages, limit, inputdata) => {
    {LIMIT,page,input} = value
  const API_KEY = "UHVanN5z494b1Du8Rn7XuIg_4kvORb-mGSAcbZGVXJ8";
  const URL = `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${value}&client_id=${API_KEY}`;

  axios
    .get(URL)
    .then((res) => (console.log(res.data.results), res.data.results)).catch(err => console.log(err));
};

export default searchService;
