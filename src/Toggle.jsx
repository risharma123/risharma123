import React, { useState } from 'react'

export default function Toggle() {
    
    const [status, setStatus] = useState(true);
    return (

        <>
            <h1>Show ,hide and Toggle </h1>
            {status ? <div className='status'>content</div> : null}

            <button onClick={() => setStatus(true)}>Show</button>
            <button onClick={() => setStatus(false)}> Hide</button>
            <button onClick={() => setStatus(!status)}>Toggle</button>

        </>
    );
}
