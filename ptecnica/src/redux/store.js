import { createStore } from "redux";
import { reducer } from './reducer';

const initialStore = {
  form: {
    nombre: "",
    precio: 0,  
  }
}



export var store = createStore(reducer, initialStore);