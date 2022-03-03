import React from 'react'

export default function ProductItem({img, name}) {
  return (
    <article className='product'>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <span className='product__name'>
        {name}
      </span>
    </article>    
  )
}
