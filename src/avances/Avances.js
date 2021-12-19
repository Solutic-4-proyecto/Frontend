import React from "react";

import { Table } from "reactstrap";
import Spinner from "../compartidos/componentes/Spinner";
import HeaderPage from "../compartidos/componentes/HeaderPage";
import { useGetAvances, useDeleteAvance } from "./custom-hooks";

export default function Avances() {
  const { loading, data } = useGetAvances();
  const [set_id] = useDeleteAvance();

  const mostrarFormularioUsuario = (usuario) => {
    console.log("");
  };

  const eliminarAvance = ({ _id }) => {
    set_id(_id);
  };

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container col-12">
          <HeaderPage name={"Avances"} nombreBoton={"Crear Avance"} actionBoton={mostrarFormularioUsuario} />
          <Table dark>
            <thead>
              <tr>
                <th>ID Proyecto</th>
                <th>Fecha Avance</th>
                <th>Descripción</th>
                <th>Observaciones</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {data.getAvances.map((avances) => (
                <tr key={avances._id}>
                  <td>{avances._id}</td>
                  <td>{avances.idProyecto}</td>
                  <td>{avances.fechaAvance}</td>
                  <td>{avances.descripcion}</td>
                  <td>{avances.observaciones}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => eliminarAvance(avances)}>
                      Editar
                    </button>{" "}
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
