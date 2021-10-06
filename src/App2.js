import React, {useState} from 'react';
import './App.css';

const Reactcontact = ()=>{
  const [user, setuser] = useState({
    name:"",
    Email:"",
    Phone:"",
    Adress:"",
    message:""
  })
  let name, value;
  const getUserData =(event)=>{
    name = event.target.name;
    value = event.target.value

    setuser({...user, [name]: value})   

  }


  return (
    <>
    <div className = "container">
      <form>
        <span className = "Heading"> Contact Us</span>
        <div className = "Name">
          <span className = "NameHeading"> Your Name</span>
          <input 
          className = "input11"
          type = "text"
          name = "name"
          placeholder = "Enter Your Name"
          value = {user.name}
          onChange = {getUserData}
          autoComplete = "off"
          required
          /> 

        </div>
        <div className = "Name">
          <span className = "NameHeading"> Email</span>
          <input 
          className = "input11"
          type = "Email"
          name = "name"
          placeholder = "Enter your Email"
          value = {user.Email}
          onChange = {getUserData}
          autoComplete = "off"
          required
          />

        </div>
        <div className = "Name">
          <span className = "NameHeading"> Phone no</span>
          <input 
          className = "input11"
          type = "number"
          name = "name"
          placeholder = "phone-no"
          value = {user.Phone}
          onChange = {getUserData}
          autoComplete = "off"
          required
          />

        </div>
        <div className = "Name">
          <span className = "NameHeading"> Adress</span>
          <input 
          className = "input11"
          type = "text"
          name = "name"
          placeholder = "Enter Your Adress"
          value = {user.Adress}
          onChange = {getUserData}
          autoComplete = "off"
          required
          />

        </div>
        <div className = "Name">
          <span className = "NameHeading">Message</span>
          <textarea 
          className = "input11"
          type = "text"
          name = "name"
          placeholder = "Write a message..."
          value = {user.message}
          onChange = {getUserData}
          
          ></textarea>

        </div>

        <div className = "Botton">
          <button className = "btn">Submit</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Reactcontact;
