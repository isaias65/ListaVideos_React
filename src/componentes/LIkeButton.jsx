import React from 'react'
import { useState } from 'react';

export const LIkeButton = () => {

  const [liked, setLiked] = useState(false);

  function handleIcon() {
    setLiked(!liked);
  }

  return (
    <button onClick={handleIcon}>
        {liked ? (
            <i className='bx bxs-heart' style={{ color: '#ff0505' }}></i>
          ) : (
            <i className='bx bx-heart'></i>
        )}
    </button>
  )
}
