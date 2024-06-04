import React from 'react'

export const Thumbnail = ({imagenurl}) => {
  return (
    <>
        <video controls   poster={imagenurl}>
            <source src="https://www.youtube.com/watch?v=3c-176VE_qQ" type="video/mp4" />
        </video>
    </>
  )
}
