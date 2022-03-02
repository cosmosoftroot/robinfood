import React from 'react'

export default function StoreItem({logo, name, address}) {
  return (
    <article  className='store'>
      <figure className='store__content-img'>
        <img src={logo} alt="" className='store__img' />
      </figure>
      <section className='store__info'>
        <span className='store__info-name'>{name}</span>
        <span className='store__info-location'>{address}</span>
      </section>
    </article>
  )
}
