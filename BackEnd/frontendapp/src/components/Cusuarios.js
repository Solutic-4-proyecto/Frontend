import { useQuery } from "@apollo/client";
import React from "react";
import { GET_USUARIOS } from "../consultas/qusuarios";
import Usuarios from "./usuarios";
import { Card, CardTitle, Table } from "reactstrap";


export default function Cusuarios() {
  const { loading, data } = useQuery(GET_USUARIOS);

  function renderUsuarios() {
    return data.getUsuarios.map((usuario) => {
      return <Usuarios key={usuario._id} id={usuario._id}></Usuarios>;
    });
  }

  return (
    <React.Fragment>
      {loading ? (
        <p>Cargando Datos...</p>
      ) : (
        <div className="container">
          <div><Card body  color="primary"
    inverse>
            <CardTitle className="text-center">LISTADO DE USUARIOS</CardTitle></Card>
          </div>
          <Table dark>
            <thead>
              <tr>
                <th>_id</th>
                <th>Identificación</th>
                <th>Nombre Completo</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {data.getUsuarios.map((usuario) => (
                <tr key={usuario._id}>
                  <td>{usuario._id}</td>
                  <td>{usuario.identificacion}</td>
                  <td>{usuario.nombreCompleto}</td>
                  <td>{usuario.correo}</td>
                  <td>{usuario.rol}</td>
                  <td>{usuario.estado}</td>
                  <td>

                  <button
                      className="btn btn-primary"
                      onClick={() => this.deleteFacturas(usuario._id)}
                    >
                      Editar
                    </button> {" "}
                    <button
                      className="btn btn-warning"
                      onClick={() => this.deleteFacturas(usuario._id)}
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </React.Fragment>
  );
}
