import React from 'react'
import { Video } from './Video'
import { Search } from './Search';
import { useState } from 'react';

export const ListVideo = ({listvideo, titlename}) => {
    const cantidad = listvideo.length;
    if(cantidad > 0){
        const titulo = cantidad > 1 ? 'Videos' : 'Video';
        titlename =  `${cantidad} ${titulo}`;

    }

    const [filtertext, setFiltertext] = useState('');

    const handlsearch = (valor) => {
        setFiltertext(valor);
    }

    const filtrarVideos = listvideo.filter(video => 
        video.title.toLowerCase().includes(filtertext.toLowerCase()) ||
        video.descripcion.toLowerCase().includes(filtertext.toLowerCase())
    );

  return (
    <section>
        <Search textvalor={handlsearch}/>
        <h2>{titlename}</h2>
        {filtrarVideos.map(info =>
            <Video 
            title={info.title} 
            descripcion={info.descripcion} 
            imagenurl={info.imagenurl} 
            videourl={info.videourl}/>
        )}
    </section>
  )
}
