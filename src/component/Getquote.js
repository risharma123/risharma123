export const getQuote1 = async()=>{
    const response = await fetch('https://api.adviceslip.com/advice',{
        method:'GET',
    });
return await response.json();
}; 
export const getData=async()=>{
    const res = await fetch ('https://jsonplaceholder.typicode.com/users',{method:'GET',});
return await res.json();
}