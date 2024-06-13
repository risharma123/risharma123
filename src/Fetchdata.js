import React from 'react'
import Card from "./Card"
import{getPosts} from "./Getmethod"
import {useState, useEffect } from 'react'


export default function Fetchdata() {
const[data,setData]=useState(null);
const Increament=(()=>
{
setData(data.id+1);

});

useEffect(()=>{
  getPosts().then((posts)=>setData(posts));
 },[]);

 
   

return (
   <>
   <div>

    {data && <Card data1={data}/> }

    <button onClick={Increament} > click me</button>

   {/* <div className='container'>
 

   {data ? data.map((e,index)=>(<div>{e.title}<span>{e.boby}</span> </div>)):"no data"}
  
   </div> */}
   </div>
   </>
  )
}
