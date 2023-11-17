import { useState } from "react"
import Content from "../components/Content"
import SearchInput from "../components/SearchInput"

const HomeContainer = () => {
    const [inputData, setInputData] = useState<string>("");
    const handleData = (value:string)=>{
        setInputData(value)
    }
  return (
    <div className="w-screen h-fit bg-black flex flex-col gap-y-2 justify-center items-center">
        <h2 className="text-white text-4xl font-bold">Image Gallery</h2>
<SearchInput handleData = {handleData} />
<div>
    <Content inputData = {inputData}/>
</div>
    </div>
  )
}

export default HomeContainer