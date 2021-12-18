import React, { useState } from "react";

import { Card, CardTitle, Table } from "reactstrap";
import Spinner from "../compartidos/componentes/Spinner";
import { useGetUsuarios } from "./custom-hooks";
import { FormularioUsuario } from "./FormularioUsuario";

export default function Usuarios() {
  const { loading, data } = useGetUsuarios();
  const [nuevoUsuario, setNuevoUsuario] = useState(false);

  const mostrarFormularioUsuario = () => {
    setNuevoUsuario(!nuevoUsuario);
  };

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container-xxl">
          <div className="row w-100 p-4">
            <div className="container-fluid ">
              <div className="row">
                <div class="col-md-6">
                  <h3>Usuarios</h3>
                </div>
                <div class="col-md-5">
                  <button className="btn btn-primary float-right" onClick={() => mostrarFormularioUsuario()}>
                    Crear Usuario
                  </button>
                </div>
              </div>
            </div>
          </div>

          {nuevoUsuario && (
            <div>
              <FormularioUsuario />
            </div>
          )}
          {!nuevoUsuario && (
            <>
              <div>
                <Card title color="primary" inverse>
                  <CardTitle className="text-center">LISTADO DE USUARIOS</CardTitle>
                </Card>
              </div>
              <Table dark>
                <thead>
                  <tr>
                    <th>Identificación</th>
                    <th>Nombre Completo</th>
                    <th>Correo</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {data &&
                    data.getUsuarios.map((usuario) => (
                      <tr key={usuario._id}>
                        <td>{usuario.identificacion}</td>
                        <td>{usuario.nombreCompleto}</td>
                        <td>{usuario.correo}</td>
                        <td>{usuario.rol}</td>
                        <td>{usuario.estado}</td>
                        <td>
                          <button className="btn btn-primary" onClick={() => this.deleteFacturas(usuario._id)}>
                            Cambiar Estado
                          </button>{" "}
                          <button className="btn btn-warning" onClick={() => this.deleteFacturas(usuario._id)}>
                            Borrar
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </>
          )}
        </div>
      )}
    </React.Fragment>
  );
}
