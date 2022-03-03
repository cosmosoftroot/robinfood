import React from 'react'

export default function StoreCard({img, name, description, address}) {
  return (
    <article className='card'>
      <div className='card__info'>
        <h2>{name}</h2>
        <p className='description'>{description}</p>
        <p className='address'>{address}</p>
      </div>
      <figure>
          <img src={img} alt={name} />
      </figure>
    </article>
  )
}
