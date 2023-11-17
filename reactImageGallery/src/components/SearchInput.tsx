import { useState } from "react";
interface SearchInputProps{
    handleData: (value:string)=>void
}

const SearchInput:React.FC<SearchInputProps> = ({handleData}) => {
  const [input, setInput] = useState("");


  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    handleData(input)
    console.log(input)
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
        className="px-12 py-4 "
        placeholder="Search value"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-gray-500 py-4 px-2" type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchInput;
