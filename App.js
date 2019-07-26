import React, { Component } from 'react';
import forms from './forms.js';

 
 
class App extends Component {

  state={
    fields:{}
  };

  onChange(e){  
    let files =e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    
    reader.onload=(e)=>{
        console.warn("img data", e.target.result)
    }
}

  onSubmit = fields =>{
  console.log("data", fields);
  };
  render(){
  return(
    <div className="App">
       <form onSubmit={fields =>this.onSubmit(fields)}>       
      <h1>
        Hello! User Welcome <br>
        </br>
        <h2> Fill the required from:</h2>
      </h1>
      <form>
    <h1>Hello!</h1>
    <input name ="firstname" placeholder='First name' 
    value={this.state.Firstname}
    required/>
     
      <input name="lastname" placeholder='Last name' 
    value={this.state.Lastname}
   required/>
    
    <input name="nickname" placeholder='Nick name' 
    value={this.state.nickname}
    required/><br></br><br></br>
    <input type ="file" name ="file" onChange={(e)=> this.onChange(e)}/><br></br><br></br>

     <button onClick={(e) => this.onSubmit(e) }>Submit

     </button>
</form>

      </form>
<p>{JSON.stringify(this.state.fields, null, 2)}</p>
    </div>
   
  );
  }
}

export default App;
