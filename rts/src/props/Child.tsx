interface ChildProps{
    color:string;
    onClick:()=>void;
    children?:React.ReactNode;
}

export const Child=(props:ChildProps)=>{
    return <div>
        Hi there from Child{props.color}
        <button onClick={props.onClick}>Click</button>
        </div>
};


export const ChildAsFC:React.FC<ChildProps>=(props)=>{
    return <div>
        {props.color}
        <button onClick={props.onClick}>Click</button>
        </div>
};
