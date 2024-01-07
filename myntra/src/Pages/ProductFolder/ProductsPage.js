import React, { useEffect, useState } from 'react';
import { Products } from '../../Datas';
import '../../MyCss/ProductsPage.css'
import { useLocation, useNavigate } from 'react-router-dom';

export default function ProductsPage() {

  const [products, setProducts] = useState(Products);
  console.log("products:", products);
  let navigate = useNavigate();
  let { state } = useLocation();

  console.log("state:", state);
  useEffect(() => {
    if (state ) {

      if( state.data !== ""){

        var temp = products.filter(e => {
          console.log("e:", e)
          return e.Name.match(state.data)
        })
        console.log("temp:", temp)
        setProducts(temp);
      }else{
        setProducts(Products);

      }

    } else {
      console.log("state is empty");
      setProducts(Products);

    }

  }, [state])

  return (
    <>
      <div className="right-container">
        <div className="row row-cols-1 row-cols-md-4">
          {products.map((product, i) => (
            <a key={i} className="col mb-4" onClick={() => {
              navigate("/displayProduct", { state: { data: product } }) }}>
              <div className="card h-20">
                <img src={product.ImageUrl} className="card-img-top" height="400px" width="auto" alt={product.Name} />
                <div className="card-body">
                  <h6 className="card-title">{product.Name}</h6>
                  <p className="card-text">Rs. {product.Cost}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
