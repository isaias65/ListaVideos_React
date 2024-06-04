import React from 'react'
import '../css/styles_search.css'
import { useState } from 'react';

export const Search = ({textvalor}) => {
  
const [textevent, settextevent] = useState('');

  const handleInput = (event) => {
    const capturaevent = event.target.value;
    settextevent(capturaevent);
    textvalor(capturaevent);
    
  };
  return (
    <div className='container_search'>
        <h1>React Videos</h1>
        <p>A brief history of React</p>

        <div className='container_input'>
            <i class='bx bx-search'></i>
            <input type="text" placeholder='Buscar' value={textevent} onChange={handleInput}/>
        </div>
    </div>
  )
}
