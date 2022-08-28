import { useEffect, useState } from 'react';

export default function ProductsList() {

    const [products, setProducts] = useState([]);
    const [urlProductsList, setUrlProductsList] = useState([])

    //Listado de productos
  useEffect(() => {
    const url = "/api/products";
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setProducts(data.products)
      setUrlProductsList(data.urlProductsList)
    })
  },[]);

  return (
    <div>
      <div className="card bg-transparent pt-3">
        <div className="card-body text-light">
          <h4 className="card-title text-center">Listado de productos</h4>
            <ul>
            {!products ? "cargando..." : products.map((product, index) => {
              return  (
                    <li key ={index} > {product.name} </li>
                    )
                  })}
            </ul>
          <a href={urlProductsList} className="btn btn-outline-secondary rounded-0 w-50 text-center">Ir a Listado de Productos</a>
        </div>
      </div>
    </div>
  )

}