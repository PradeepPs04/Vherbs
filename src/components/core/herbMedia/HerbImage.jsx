import React from 'react'

const HerbImage = ({image}) => {
  return (
    <div className='h-full'>
        <img 
            src={image} 
            alt='Herb Image'
            loading='lazy'
            className='h-full w-full object-cover'
        />
    </div>
  )
}

export default HerbImage;