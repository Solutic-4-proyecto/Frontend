import React, { useState } from "react";

import { Table } from "reactstrap";
import Spinner from "../compartidos/componentes/Spinner";
import HeaderPage from "../compartidos/componentes/HeaderPage";
import useModal from "../compartidos/hooks/useModal";
import { useGetProyectos, useDeleteProyecto } from "./custom-hooks";
import ModalProyectos from "./ModalProyectos";

export default function Proyectos() {
  const [isOpenModal, openModal, closeModal] = useModal();
  const [updateProyecto, setUpdateProyecto] = useState();
  const [isUpdate, setIsUpdate] = useState(false);

  const { loading, data } = useGetProyectos();
  const [set_id] = useDeleteProyecto();

  const editarProyecto = ({_id}) => {
      setUpdateProyecto(_id);
      setIsUpdate(true);
  };

  const eliminarProyecto = ({ _id }) => {
    set_id(_id);
  };

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container col-12">
          <HeaderPage name={"Proyectos"} nombreBoton={"Crear Proyecto"} actionBoton={openModal} />
          <Table dark>
            <thead>
              <tr>
                <th>ID Proyecto</th>
                <th>Nombre Proyecto</th>
                <th>Presupuesto</th>
                <th>F. Inicio</th>
                <th>Nombre Líder</th>
                <th>Estado</th>
                <th>Fase Proyecto</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {data.getProyectos.map((proyectos) => (
                <tr key={proyectos._id}>
                  <td>{proyectos.idProyecto}</td>
                  <td>{proyectos.nombreProyecto}</td>
                  <td>{proyectos.presupuesto}</td>
                  <td>{proyectos.fechaInicio}</td>
                  <td>{proyectos.nombreLider}</td>
                  <td>{proyectos.estado}</td>
                  <td>{proyectos.faseProyecto}</td>
                  <td>
                    <button className="btn btn-primary disabled" onClick={() => {/*editarProyecto(proyectos)*/}}>
                      Editar
                    </button>{" "}
                    <button className="btn btn-warning" onClick={() => eliminarProyecto(proyectos)}>
                      Borrar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
      <ModalProyectos isOpen={isOpenModal} close={closeModal} proyecto={updateProyecto} />
    </React.Fragment>
  );
}
