const express  = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const cors = require('cors');

const schema = buildSchema(`
  type Producto {
    id: Int
    nombre: String
    precio: Int
  }

  type Query {
    productos: [Producto]
    producto(id: Int) : Producto
  }

  type Mutation {
    addProducto(nombre: String, precio: Int): Producto
  }

`);



const productos = [];
let counter = 1;

const root = {
  productos: () => { return productos;},

  producto: ( data ) => {

    for(let i = 0; i < productos.length; i++) {
      if(productos[i].id == data.id) {
        return productos[i]
      }
    }

    return null;

  },

  addProducto: ( data ) => {
    let p = {
      'id' : counter,
      'nombre': data.nombre,
      'precio': data.precio
    };

    productos.push( p );
    counter++;
    
    return p;
  }

};

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));


app.listen(4000);
console.log('ready');