import axios from "axios";

const searchService = async (value: string) => {
    // const API_KEY = "UHVanN5z494b1Du8Rn7XuIg_4kvORb-mGSAcbZGVXJ8";
    const API_KEY =  import.meta.env.VITE_REACT_APP_UNSPLASH_API_KEY;
  const URL = `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${value}&client_id=${API_KEY}`;

 await axios
    .get(URL)
    .then((res) => (
        console.log(res.data.results),
        res.data.results
        ))
    .catch((err) => console.log(err));
};

export default searchService;
