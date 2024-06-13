import React ,{useState}from 'react'

export default function Validationinform() {
    const[data,setData]=useState({
        name:' ',
        email:' ',
        password:' ',
        confirmpassword:''
       });
       const [error , setErrors]=useState({});

       const changeHandle=(e)=>{
        const {name,value}=e.target;
        setData({...data,[name]:value});
       }

     const sumbitHandle= (e)=>{
        e.preventDefault();
        const validationerror={};

        if(!data.name.trim()){
         validationerror.name="name is required";    
        }

        if(!data.email.trim()){
            validationerror.email="email is required";    
           } else if(!/\S+@\S+.\S+/.test(data.email))
            {
                validationerror.email="email is not valid "; 
            }

        if(!data.password.trim()){
            validationerror.password="password is required";  
        }else if(data.password.length<6){
            validationerror.password="password should be 6 character";     
        }

        if(data.confirmpassword!== data.password)
            {
                validationerror.confirmpassword="password does not match ";
            }

        setErrors(validationerror);
        if(Object.keys(validationerror).length===0)
            alert("submitted succesfully")
     }  

  return (
    <div className='box'>
        <form onSubmit={sumbitHandle}>
            <label>NAME:</label>
            <input type="text" placeholder='enter the name' name="name" onChange={changeHandle}/>
            {error.name && <span>{error.name}</span>}
            <br></br>

            <label>Email:</label>
            <input type="text" placeholder='enter the email' name="email" onChange={changeHandle}/>
            {error.email && <span>{error.email}</span>}
            <br></br>
            <label>Password:</label>
            <input type="password" placeholder='********' name="password" onChange={changeHandle} />
            {error.password && <span>{error.password}</span>}
            <br></br>
            <label>Confirm Password:</label>
            <input type="password" placeholder='******' name="confirmpassword" onChange={changeHandle}/>
            {error.confirmpassword && <span>{error.confirmpassword}</span>}<br></br>
            <button>Submit</button>

        </form>
    </div>
  )
}
