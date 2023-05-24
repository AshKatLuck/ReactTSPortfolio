import {useState} from "react";

const UserSearch:React.FC=()=>{
    const users=[
        {name:"Sarah", age:20},
        {name:'Aldi', age:90},
        {name:'Asha', age:37},
    ]
    const [name, setName]=useState('');
    const [user, setUser]=useState<{name:string, age:number}|undefined>();
    const onClick=()=>{
        const foundUser=users.find(user=>user.name===name);
        console.log(foundUser);
        setUser(foundUser);
    }
    return <div>
        <h2>User Search</h2>
        <input onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={onClick}>Search</button>
        {user&&user.name}
        {user&&user.age}
    </div>
}

export default UserSearch;