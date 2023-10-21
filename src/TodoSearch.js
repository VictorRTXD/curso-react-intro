import React from 'react';
import './TodoSearch.css'

function TodoSearch({searchValue, setsearchValue}) {
    return(
        <input placeholder="el mejor rockstar con pc" className='TodoSearch'
            value={searchValue} //aqui se analizara el estado default
            onChange={(event) => {
                // console.log("esto es el todo search");
                // console.log(event);
                // console.log(event.target);
                // //para saber el valor del placeholder cada vez que cambia
                // console.log(event.target.value); 

                setsearchValue(event.target.value); //funcion actualizadora
            }}
        />
    );
}
export { TodoSearch };