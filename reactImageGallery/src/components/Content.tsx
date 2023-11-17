import axios from "axios";
import searchService from "../utils/searchService";
import { useQuery } from "react-query";

interface ContentProps {
  inputData: string;
}
const API_KEY =  import.meta.env.VITE_REACT_APP_UNSPLASH_API_KEY;
const Content: React.FC<ContentProps> = ({ inputData }) => {
const URL = `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${inputData}&client_id=${API_KEY}`;

  // const fetchData = async () => {
  //   const result = await searchService(inputData);
  //   console.log(result);
  //   return result;
  // };
  const { data, isLoading, isError } = useQuery(
     ["search",inputData],
    ()=> axios.get(URL).then((res) => (
      console.log(res.data.results),
      res.data.results)),
  );

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (isError) return <div className="text-white">Error</div>;

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 text-white">
        {data?.map((item: any) => {
          return (
            <div className="bg-white">
              <img src={item.urls.small} alt="" />
            </div>
          );
        })}
        {/* hello */}
      </div>
    </div>
  );
};

export default Content;
