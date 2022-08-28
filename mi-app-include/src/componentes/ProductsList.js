import { useEffect, useState } from 'react';

export default function ProductsList() {

    const [products, setProducts] = useState([]);

    //Listado de productos
  useEffect(() => {
    const url = "/api/products";
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setProducts(data.products)
    })
  },[]);

  return (
    <div>
        <ul>
          <h5>Listado de productos</h5>
      {!products ? "cargando..." : products.map((product, index) => {
        return  (<li key ={index}>{product.name}</li>

        )
      })}
        </ul>
      </div>
  )

}