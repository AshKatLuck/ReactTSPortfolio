interface ChildProps{
    color:string;
}

export const Child=(props:ChildProps)=>{
    return <div>Hi there from Child{props.color}</div>
};