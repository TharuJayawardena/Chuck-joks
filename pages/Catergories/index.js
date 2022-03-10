const axios = require('axios')
import { useState } from 'react'













const Index = () => {

    const [resObj, setResObj] = useState({})

    const handleClick  = (e) => {
        e.preventDefault()
        axios.get('https://api.chucknorris.io/jokes/random')
          
             .then(res => {
                setResObj(res)
             })

    }
   
    return (
        <div>
            <h3>Chuck Noris Fact Generator</h3>
            <p>Click the button to generate a chuck Norrise fact</p>
            <button onClick ={handleClick }  > Animal</button>
        
            <button onClick = {handleClick} > |Career|</button>
            <button onClick = {handleClick} > |Celebrity|</button>
            <button onClick = {handleClick} > |Dev|</button>
            <button onClick = {handleClick} > |Explicit|</button>
            <button onClick = {handleClick} > |Fashion|</button>
            <button onClick = {handleClick} > |Food|</button>
            <button onClick = {handleClick} > |History|</button>
            <button onClick = {handleClick} > |Money|</button>
            <button onClick = {handleClick} > |Movie|</button>

            <button onClick = {handleClick} > |Music|</button>
            <button onClick = {handleClick} > |Political|</button>
            <button onClick = {handleClick} > |Religion|</button>
            <button onClick = {handleClick} > |Science|</button>
            <button onClick = {handleClick} > |Sport|</button>
            <button onClick = {handleClick} > |Travel|</button>
          
            <p>{
                Object.keys(resObj).length >= 1 ? resObj.data.value
                : ''
                }</p>
        
        </div>
       
    )
    
}




export default Index