import React,{useState} from "react";

export default function FormHandling() {
   const[formData,setFormData]=useState({
    UserName:' ',
    Email:' ',
    Password:' ',
    issubcript:''
   });

const ChangeHandle=(event)=>{
 const {name,value,type,checked}=event.target;
 const fieldValue = type ==='checkbox'? checked:value;
 setFormData({...formData,[name]:fieldValue});
}
const SubmitHandler=(event)=>{
event.preventDefault();
console.log(formData);
}
    return (
        <>
        <form onSubmit={SubmitHandler}>
            <div>
                <label htmlFor="Username">UserName:</label>
                <input type="text"
                name="UserName"
                id="UserName"
                value={formData.name}
              onChange={ChangeHandle}
                />
            </div>
            <div>
                <label htmlFor="Email">Email:</label>
              <input type="email"
                name="Email"
                id="Email"
                value={formData.email}
              onChange={ChangeHandle}
                />
            </div>
            <div>
                <label htmlFor="Password">Password:</label>
                <input type="password"
                name="Password"
                id="Password"
                value={formData.password}
              onChange={ChangeHandle}
                />
            </div> 
            <div>
                <label htmlFor="issubcript">issubscrip:</label>
                <input type="checkbox"
                name="checked"
                id="checked"
                value={formData.issubcript}
              onChange={ChangeHandle}
                />
            </div> 
            <button>Submit</button>
        </form>
        </>
    );
}