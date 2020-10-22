import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { nameUp, priceUp } from '../../redux/reducer';
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';

import './ProductForm.scss';

function ProductForm(props) {

  const ADD_PRODUCTO = gql`
    mutation addProducto($nombre: String!, $precio: Int!) {
      addProducto(nombre: $nombre, precio: $precio) {
        id
        nombre
        precio
      }
    }`;

    const [addProducto] = useMutation(ADD_PRODUCTO);  

    const clickAction = () => {
      if(props.state.form.nombre.length > 0){
        addProducto({variables: {
          "nombre": props.state.form.nombre,
          "precio": parseInt(props.state.form.precio, 10)
        }}).then(alert("Producto añadido"));
      }  
    }

    const PreviewCard = () => {
      return (
        <div className="producto">
          <p className="producto__nombre">Nombre: {props.state.form.nombre}</p>
          <p className="producto__precio">Precio: {props.state.form.precio}€</p>
        </div>
      );
    }

    useEffect(()=>{
      return(()=>{
        props.nameUp("");
        props.priceUp(0);
      })
    }, []);
    
  return(
    <div className="product-form">
      <div className="product-form__input">
        <label className="label">Nombre</label>
        <input className="input" type="text" onKeyUp={e=>props.nameUp(e.target.value)} />
      </div>
      <div className="product-form__input">
        <label className="label">Precio</label>
        <input className="input" type="number" min="0" onKeyUp={e=>props.priceUp(e.target.value)} />
      </div>
      <div className="product-form__button">
        <button type="button" onClick={()=>clickAction()}>Añadir Producto</button>
      </div>
      
      <h3>Preview:</h3>
      {(props.state.form.nombre.length > 0) ? <PreviewCard /> : ""}
      
    </div>
  )
}

const mapStateToProps = state => ({ state });
const mapDispatchToProps = (dispatch) => ({
  nameUp: (value) => dispatch( nameUp(value) ),
  priceUp: (value) => dispatch( priceUp(value) )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductForm)