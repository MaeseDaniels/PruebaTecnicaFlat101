import React, { useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';


import './ProductList.scss';

function ProductList(props) {

  const GET_PRODUCTOS = gql`
  {
    productos {
      id
      nombre
      precio
    }
  }`;

  const {loading, error, data, refetch} = useQuery(GET_PRODUCTOS);
  
  const RenderProductos = () => {
    
    if(loading) {
      return (
        <h3>Loading...</h3>
      );
    }

    if(error) {
      return (
        <h3>Error</h3>
      );
    }
    
    return (
      data.productos.map(producto => {
        return(
          <div key={producto.id} className="producto">
            <p className="producto__nombre">Nombre: {producto.nombre}</p>
            <p className="producto__precio">Precio: {producto.precio}€</p>
    
          </div>
        );
      })
    )
  }

  useEffect(()=>{
    
    refetch();
      
  },[refetch]);

  return (
    <div className="product-list">
      <div className="product-list__wrapper">
       <RenderProductos />
      </div>
    </div>
  );
}

export default ProductList;