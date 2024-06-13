import React from 'react'

export default function Card(props) {
    console.log(props.data1);
  return (
    <div>
        
   {/* {props.data1 ?props.data1.map((e,index)=>(<div>{e.title}<span>{e.boby}</span> </div>)):"no data"} */}
        <p>{props.data1.title}</p>
        <p>{props.data1.body}</p>
    </div>
  )
}
