import React, { useState } from "react";

import { Card, CardTitle, Table } from "reactstrap";
import Spinner from "../compartidos/componentes/Spinner";
import { useGetUsuarios, useDeleteUsuario } from "./custom-hooks";
import { FormularioUsuario } from "./FormularioUsuario";

import "./usuarios-estilos.css";

export default function Usuarios() {
  const { loading, data } = useGetUsuarios();
  const [nuevoUsuario, setNuevoUsuario] = useState(false);
  const [editarUsuario, setEditarUsuario] = useState(false);
  const [usuario, setUsuario] = useState();
  const [set_id] = useDeleteUsuario();

  const mostrarFormularioUsuario = (usuario) => {
    if (usuario) {
      setEditarUsuario(!editarUsuario);
      setUsuario(usuario);
    } else {
      setNuevoUsuario(!nuevoUsuario);
    }
  };

  const eliminarUsuario = ({ _id }) => {
    set_id(_id);
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

          {(nuevoUsuario || editarUsuario) && (
            <div>
              <FormularioUsuario data={usuario} />
            </div>
          )}
          {!(nuevoUsuario && editarUsuario) && (
            <>
              <div>
                <Card title color="primary" inverse>
                  <CardTitle className="text-center">LISTADO DE USUARIOS</CardTitle>
                </Card>
              </div>
              <div className="container-table">
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
                            <button className="btn btn-primary" onClick={() => mostrarFormularioUsuario(usuario)}>
                              Cambiar Estado
                            </button>{" "}
                            <button className="btn btn-warning" onClick={() => eliminarUsuario(usuario)}>
                              Borrar
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </div>
            </>
          )}
        </div>
      )}
    </React.Fragment>
  );
}
