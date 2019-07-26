import React from 'react';
import {  } from "react";



export default class form extends React.Component{
state ={
    Firstname:'',
    Lastname: '',
    nickname:'',
};
change =(e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
};
onSubmit= (e)=> {
    e.preventDefault();
    this.props.onSubmit(this.state);
    console.log(this.state);
}
onChange(e){  
    let files =e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    
    reader.onload=(e)=>{
        console.warn("img data", e.target.result)
    }
}
render(){
    return(
<form>
    <h1>Hello!</h1>
    <input name ="firstname" placeholder='First name' 
    value={this.state.Firstname}
     onChange={e => this.change(e)} required/>
     
      <input name="lastname" placeholder='Last name' 
    value={this.state.Lastname}
    onChange={e => this.change(e)} required/><br></br>
    
    <input name="nickname" placeholder='Nick name' 
    value={this.state.nickname}
     onChange={e => this.change(e)} required/> <br></br>
<input type ="file" name ="file" onChange={(e)=> this.onChange(e)}/><br></br>
     <button onClick={(e) => this.onSubmit(e)}>Submit

     </button>
</form>

    );
}
}
