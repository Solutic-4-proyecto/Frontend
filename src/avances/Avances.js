import React from "react";

import { Table } from "reactstrap";
import Spinner from "../compartidos/componentes/Spinner";
import HeaderPage from "../compartidos/componentes/HeaderPage";
import useModal from "../compartidos/hooks/useModal";
import { useGetAvances } from "./custom-hooks";
import ModalAvances from "./ModalAvances";

export default function Avances() {
  const [isOpenModal, openModal, closeModal] = useModal();

  const { loading, data } = useGetAvances();

  const editarAvance = ({ _id }) => {};

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container col-12">
          <HeaderPage name={"Avances"} nombreBoton={"Crear Avance"} actionBoton={openModal} />
          <Table dark>
            <thead>
              <tr>
                <th>Id Proyecto</th>
                <th>Fecha Avance</th>
                <th>Descripción</th>
                <th>Observaciones</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {data.getAvances.map((avances) => (
                <tr key={avances._id}>
                  <td>{avances.idProyecto}</td>
                  <td>{avances.fechaAvance}</td>
                  <td>{avances.descripcion}</td>
                  <td>{avances.observaciones}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => editarAvance(avances)}>
                      Editar
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
      <ModalAvances isOpen={isOpenModal} close={closeModal} />
    </React.Fragment>
  );
}
