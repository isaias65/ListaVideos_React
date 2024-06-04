import React from 'react'
import { Thumbnail } from './Thumbnail'
import { LIkeButton } from './LIkeButton'

export const Video = ({title, descripcion, imagenurl, videourl}) => {
  return (
    <div className='container_video'>
        <Thumbnail imagenurl={imagenurl}/>
        <a className='video_info' href={videourl} target="_blank">
            <h3 className='video_title'>{title}</h3>
            <p className='video_descrip'>{descripcion}</p>
        </a>
        <LIkeButton />
    </div>
  )
}
