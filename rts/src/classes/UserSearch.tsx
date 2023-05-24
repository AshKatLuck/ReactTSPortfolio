import {Component} from "react";

interface User{
    name:string,
    age:number,
}

interface userSearchProps{
    users:User[]
}

interface userSearchState{
    name:string,
    user:User|undefined,
}

class UserSearch extends Component<userSearchProps>{
   state:userSearchState={
    name:'',
    user:undefined,
   }

   onClick=()=>{
        const foundUser=this.props.users.find(user=>user.name===this.state.name);
        console.log(foundUser);
        this.setState({user:foundUser});
   }

   render(){
    const {user, name}=this.state;
    return(<div>
            <h2>User Search</h2>
            <input onChange={e=>this.setState({name:e.target.value})}/>
            <button onClick={this.onClick}>Search</button>
            {user&&user.name}
            {user&&user.age}
        </div>)
   }
}

export default UserSearch;