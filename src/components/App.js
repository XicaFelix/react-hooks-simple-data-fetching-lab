// create your App component here

import React, {useEffect, useState } from "react";

function App(){
    const [data, setData] = useState('')
    const [isLoaded, setLoaded] = useState(false)
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random').then(response=> response.json()).then(result=>{
            setLoaded(true);
            setData(result);
            console.log(data)
        })
    }, [])
    if(!isLoaded) return <h3>Loading...</h3>
    return(
        <div>
            <img src={data.message} alt='A Random Dog'/>
        </div>
    );
}

export default App;