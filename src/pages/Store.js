import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pizza from "../assets/Pizza.png";
import Header from "../components/Header";
import { DataContext } from "../context/DataContext";
import { storeImg } from "../assets/storeImages";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import logo from "../assets/Logo.png"
import StoreCard from "../components/StoreCard";
import { productImg } from '../assets/productImages'
import ProductItem from "../components/ProductItem";

export default function Store() {
  const { getStore, loading, loadData } = useContext(DataContext);
  const [store, setStore] = useState({})
  
  let { id } = useParams();

  useEffect(()=>{
    loadData()
    const result = getStore(id)
    if(Object.keys(result).length > 0){
      setStore(result)
    }
  },[])



  return (
    <div className="store">
      <div className="content">
        <section className="content__image">
          <img className="logo" src={logo} alt="Best pizza logo" />
          <img className="banner" src={pizza} alt="Pizza" />
        </section>
        <section className="content__right">
          <section className="content__stores">
            <Header />
            {loading ? (
              <section className="content__loading">
                <Loading />
              </section>
            ) : (
              <>
                {Object.keys(store).length > 0 ? (
                  <>            
                    <StoreCard 
                      img={storeImg[store.id - 1]}
                      name={store.name}
                      description={store.description}
                      address={store.address}
                    />
                    {store.products.map((product, index) => (
                      <ProductItem 
                        key={product.key} 
                        name={product.name}
                        img={productImg[index]}
                      />
                    ))}             
                  </>
                ) : (
                  <div>Ocurrió un error</div>
                )
              }</>
            )}            
          </section>
          <Footer />
        </section>
      </div>
    </div>
  );
}
