import { Child } from "./Child";

const Parent=()=>{
    return <Child color="red" onClick={()=>console.log("clicked")}>
        <h1>No children allowed</h1>
        </Child>;
}

export default Parent;