import axios from "axios";
// import searchService from "../utils/searchService";
import { useQuery, useInfiniteQuery } from "react-query";
import Button from "./Button";
import { useReducer } from "react";

interface ContentProps {
  inputData: string;
}
interface UnsplashData {
  id: string;
  urls: {
    regular: string;
  };
}
enum ActionType {
  INCREMENT = "INCREMENT",
}
interface PageState {
  value: number;
}
interface PageAction {
  type: ActionType;
  payload?: number;
}
const API_KEY =  import.meta.env.VITE_REACT_APP_UNSPLASH_API_KEY;
const pageReducer = (state:PageState, action:PageAction) => {
  switch (action.type) {
    case "INCREMENT":
      return {value: state.value + 1};
    default:
      return state;
  }
}


const Content: React.FC<ContentProps> = ({ inputData  }) => {
  // const URL = `https://api.unsplash.com/search/photos?page=1&per_page=${pages}&query=${inputData}&client_id=${API_KEY}`;
  const initialValue = {
    value:1,
  }
  const LIMIT = 10;
  const [pages, pageDispatcher] = useReducer(pageReducer, initialValue)
  const URL = `https://api.unsplash.com/search/photos?page=${pages.value}&per_page=${LIMIT}&query=${inputData}&client_id=${API_KEY}`;

  const handleClick = () => {
    console.log(pages.value);
    pageDispatcher({type:ActionType.INCREMENT})
  }
  const { data, isLoading, isError, fetchNextPage, hasNextPage } = useInfiniteQuery<UnsplashData[]>(
    
     {
      queryKey:["search",pages.value,inputData], 
      queryFn:()=> axios.get(URL).then((res) => (
        console.log(res.data.results)
        ,
        res.data.results)),
        keepPreviousData:true,
        getNextPageParam: (lastPage, allPages) => {
          const nextPage =
        lastPage.length === LIMIT ? allPages.length + 1 : undefined;
      return nextPage;
        },
     }
      
  );
  if (isLoading) return <div className="text-white">Loading...</div>;
  if (isError) return <div className="text-white">Error</div>;

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 text-white">
        {data?.pages.map((page) => 
          page.map((item) => (
            <div key={item.id}>
              <img src={item.urls.regular} alt={item.id} />
            </div>
          ))
        )}
      </div>
      {data && data.pages[0].length >0 && <div className="  shadow-xl m-2 flex w-fit mx-auto  z-10 bottom-0  justify-center">
      <Button handleClick={fetchNextPage}>
View More
      </Button>
      
      </div>}

    </div>
  );
};

export default Content;
