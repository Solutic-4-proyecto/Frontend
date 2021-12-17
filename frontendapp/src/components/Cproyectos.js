import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PROYECTOS } from "../consultas/qproyectos";

import { Card, CardTitle, Table } from "reactstrap";

export default function Cproyectos() {
    const { loading, data } = useQuery(GET_PROYECTOS);

    return (
        <React.Fragment>
          {loading ? (
            <p>Cargando Datos...</p>
          ) : (
            <div className="container">
              <div><Card body  color="primary"
        inverse>
                <CardTitle className="text-center">PROYECTOS ACTUALES</CardTitle></Card>
              </div>
              <Table dark>
                <thead>
                  <tr>
                    <th>_id</th>
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
                      <td>{proyectos._id}</td>
                      <td>{proyectos.idproyecto}</td>
                      <td>{proyectos.nombreProyecto}</td>
                      <td>{proyectos.presupuesto}</td>
                      <td>{proyectos.fechaInicio}</td>
                      <td>{proyectos.nombreLider}</td>
                      <td>{proyectos.estado}</td>
                      <td>{proyectos.faseProyecto}</td>
                      <td>
    
                      <button
                          className="btn btn-primary"
                          onClick={() => this.deleteFacturas(proyectos._id)}
                        >
                          Aprobar
                        </button> {" "}
                        <button
                          className="btn btn-warning"
                          onClick={() => this.deleteFacturas(proyectos._id)}
                        >
                          Activar
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