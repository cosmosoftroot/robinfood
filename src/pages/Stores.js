import React, { useContext } from 'react'
import pizza from '../assets/Pizza.png'
import Header from '../components/Header'
import StoreItem from '../components/StoreItem'
import { DataContext } from '../context/DataContext'
import { storeImg } from '../assets/storeImages'

export default function Stores() {

  const {stores} = useContext(DataContext)

  
  return (
    <div className='stores'>
      {console.log('stores', stores)}
      <div className='content'>
        <section className='content__image'>
          <img src={pizza} alt="Pizza" />
        </section>
        <section className='content__right'>
          <Header/>               
          <section className='content__stores'>
            <h1>Tiendas</h1>
            <p>Escoge tu pizzería favorita</p>
            <section className='content__list'> 
              {stores.length > 0 ? stores.map((store, index) => (
                <StoreItem
                  logo={storeImg[index]}
                  name={store.name}
                  address={store.address}
                />
                )) : (
                <div>cargando</div>
              )
            }
            </section>
          </section>
        </section>
      </div>
    </div>
  )
}
