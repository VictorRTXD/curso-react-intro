import React from 'react';
import './TodoSearch.css'

function TodoSearch() {
    return(
        <input placeholder="el mejor rockstar con pc"
         className='TodoSearch'
         
         onChange={(event) => {
            console.log("esto es el todo search");
            console.log(event);
            console.log(event.target);
            //para saber el valor del placeholder cada vez que cambia
            console.log(event.target.value); 
         }}/>
    );
}

export { TodoSearch };