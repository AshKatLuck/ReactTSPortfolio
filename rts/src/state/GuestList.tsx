import {useState} from "react";

const GuestList:React.FC=()=>{
    const [name, setName]=useState("");
    const [guestList, setGuestList]=useState<string[]>([]);
    const onClick=()=>{
        setGuestList([...guestList, name]);
        setName("");
    }

    return <div>
        <h3>GuestList</h3>
        <ul>
            {guestList.map(guest=><li key={guest}>{guest}</li>)}
        </ul>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={onClick}>Add</button>
    </div>
}

export default GuestList;