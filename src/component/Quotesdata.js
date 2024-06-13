import React, { useState,useEffect } from 'react'
import { getQuote1 } from './Getquote';
// import Card from "./Cardpost"

export default function Quotesdata() {

    const [quote, setQuote]= useState("");

    useEffect(()=>{
        getQuote1().then((posts)=>setQuote(posts.slip.advice));

    },[]);
    const Click =()=>{
        getQuote1().then((posts)=>setQuote(posts.slip.advice));  
    }

  return (
  <>
    <div className="card-post">
      {/* { quote ? quote.map((e)=>(<Card data={e.data}/>)):<p>no data </p>}  */}
      <div className='card'> 

        <p>{ quote ?  `${quote}`:  "no data"}</p>
        <button onClick={Click}> click me</button>
        </div>
    </div>
    </>
  );
}
