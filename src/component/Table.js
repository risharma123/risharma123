import React, { useState,useEffect } from 'react'
import { getData } from './Getquote';

export default function Table() {
const [data1,setData1]=useState("");
const [name ,setName]=useState("");
const [email ,setemail]=useState("");
const [id,setId]=useState(0);
const [isupdate,setIsupdate]=useState(false);
useEffect(()=>{
getData().then((data)=>setData1(data));
 },[]);

const Editdata= (id)=>{
//  setData1(id);
const dt=data1.filter(item=>item.id===id)
if(dt!== undefined){
    setIsupdate(true);
    setId(id);
    setName(dt[0].name);
    setemail(dt[0].email);

}
}

const Deletedata =(id)=>{
    if(id>0)
        {if(window.confirm("are you sure you want to delete the data ")){
            const dt=data1.filter(item=>item.id!==id)
            setData1(dt);
        }
        }else{
            alert("not sufficient data")
        }
}
const Adddata=(e)=>{
  e.preventDefault();
  const dt=[...data1];
  const newObject={
    id:'https://jsonplaceholder.typicode.com/users'.length+1,
    name:name,
    email:email
  }
  dt.push(newObject);
  setData1(dt);

}
const Updatedata=()=>{
  const index=data1.map((d2)=>{
    return d2.id
  }).indexOf(id);
  const dt=[...data1];
  dt[index].name=name;
  dt[index].email=email;
  setData1(dt);


}
 

  return (
    <>
    <div>
    <input type="text" placeholder='enter name'onChange={(e)=>setName(e.target.value)} value={name}></input>
    <input type="text" placeholder='enter email' onChange={(e)=>setemail(e.target.value)} value={email}></input>
   {!isupdate ?  <button onClick={(e)=>Adddata(e)}>ADD</button> : <button onClick={()=>Updatedata()}>Update</button>}
    </div>
    <div>
        <table border="1">
            <thead>
                <th>ID </th>
                <th>NAME </th>
                <th>EMAIL </th>
                <th>ACTION
                     </th>
            </thead>
            <tbody>
              {data1 ? data1.map((d1,i1)=>(
                <tr key ={i1}>
                    <td>
                        {d1.id}
                    </td>
                    <td>
                        {d1.name}
                    </td>
                    <td>
                        {d1.email}
                    </td>
                    <td>
                     <button onClick={()=>Editdata(d1.id)}>Edit</button> 
                    { /* {!isupdate? <button onClick={()=>Editdata(d1.id)}>Edit</button>: <button onClick={()=>Updatedata()}>Edit</button>}*/}
                    </td>
                    <td>
                       <button onClick={()=>Deletedata(d1.id)}>Delete</button>
                    </td>
                </tr>
              )):"no data"}
            </tbody>
        </table>
    </div>
    </>
  );
};
