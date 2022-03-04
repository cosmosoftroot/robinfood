import React, { useContext, useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import pizza from "../assets/Pizza.png";
import Header from "../components/Header";
import StoreItem from "../components/StoreItem";
import { DataContext } from "../context/DataContext";
import { storeImg } from "../assets/storeImages";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import logo from "../assets/Logo.png"

export default function Stores() {
  const { stores, loading, loadData } = useContext(DataContext);
  const [search, setSearch] = useState("")

  useEffect(()=>{
    loadData()
  },[])

  const filteredStores = useMemo(()=>
  stores.filter((store)=>{
    return store.name.toLowerCase().includes(search.toLowerCase())
  }) ,[stores, search])


  return (
    <div className="stores">
      <div className="content">
        <section className="content__image">
          <Link to={"/tiendas"}>
            <img className="logo" src={logo} alt="Best pizza logo" />
          </Link>
          <img className="banner" src={pizza} alt="Pizza" />
        </section>
        <section className="content__right">
          <section className="content__stores">
            <Header />
            <section className="stores">
              <h1>Tiendas</h1>
              <div className="stores__find">
                <p>Escoge tu pizzería favorita</p>
                <input className="input__find" type="text" placeholder="Buscar tienda" value={search} onChange={(ev)=>setSearch(ev.target.value)}/> 
              </div>
              {loading ? (
                <section className="content__loading">
                  <Loading />
                </section>
              ) : (
                <>
                  {filteredStores.length > 0 ? (
                    <section className="content__list">
                      {filteredStores.map((store, index) => (
                        <Link key={index} to={`/tienda/${store.id}`} className="link">
                          <StoreItem
                            logo={storeImg[index]}
                            name={store.name}
                            address={store.address}
                            
                          />                        
                        </Link>
                      ))}
                    </section>
                  ) : (
                    <section className="notFound">No se encontraron resultados</section>
                  )}                
                </>
              )}

            </section>
          </section>
          <Footer />
        </section>
      </div>
    </div>
  );
}
