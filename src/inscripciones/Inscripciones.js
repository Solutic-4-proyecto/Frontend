import React from "react";

import { Table } from "reactstrap";
import Spinner from "../compartidos/componentes/Spinner";
import HeaderPage from "../compartidos/componentes/HeaderPage";
import useModal from "../compartidos/hooks/useModal";
import { useDeleteInscripcion, useGetInscripciones } from "./custom-hooks";
import ModalInscripciones from "./ModalInscripciones";

export default function Inscripciones() {
  const [isOpenModal, openModal, closeModal] = useModal();

  const { loading, data } = useGetInscripciones();
  const [set_id] = useDeleteInscripcion();

  const eliminarInscripcion = ({ _id }) => {
    set_id(_id);
  };

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container col-12">
          <HeaderPage name={"Inscripciones"} nombreBoton={"Crear Inscripcion"} actionBoton={openModal} />
          <Table dark>
            <thead>
              <tr>
                <th>Id Proyecto</th>
                <th>Id Estudiante</th>
                <th>Estado</th>
                <th>Fecha Inicio</th>
                <th>Fecha Terminación</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {data.getInscripciones.map((inscripciones) => (
                <tr key={inscripciones._id}>
                  <td>{inscripciones.idProyecto}</td>
                  <td>{inscripciones.identificacionEstudiante}</td>
                  <td>{inscripciones.estado}</td>
                  <td>{inscripciones.fechaIngreso}</td>
                  <td>{inscripciones.fechaEgreso}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => this.deleteFacturas(inscripciones._id)}>
                      Aprobar
                    </button>
                    <button className="btn btn-warning" onClick={() => this.deleteFacturas(inscripciones._id)}>
                      Rechazar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
      <ModalInscripciones isOpen={isOpenModal} close={closeModal} />
    </React.Fragment>
  );
}
