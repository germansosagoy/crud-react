import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import { useState } from 'react';

function App() {

  const dataDePaises = [
    { id: 1, nombre: "Filipinas", minutos: 241 },
    { id: 2, nombre: "Brasil", minutos: 225 },
    { id: 3, nombre: "Colombia", minutos: 216 },
    { id: 4, nombre: "Nigeria", minutos: 216 },
    { id: 5, nombre: "Argentina", minutos: 207 },
    { id: 6, nombre: "Indonesia", minutos: 195 },
    { id: 7, nombre: "Emiratos Árabes", minutos: 191 },
    { id: 8, nombre: "México", minutos: 190 },
    { id: 9, nombre: "Sudáfrica", minutos: 190 },
    { id: 10, nombre: "Egipto", minutos: 186 },
  ];

  const [data, setData] = useState(dataDePaises);




  return (
    <div className="App">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th> ID </th>
            <th> Nombre </th>
            <th> Minutos (x/dia) </th>
            <th> Acciones </th>
          </tr>
        </thead>
      <tbody>
        {data.map(elemento=>(
          <tr>
            <td>{elemento.id}</td>
            <td>{elemento.nombre}</td>
            <td>{elemento.minutos}</td>
            <td><button className="btn-primary">Editar</button>{"   "}
            <button className="btn-danger">Eliminar</button>{"   "}</td>
          </tr>
        ))
        }
      </tbody>
      </table>      



    </div>
  );
}

export default App;
