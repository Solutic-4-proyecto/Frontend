import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AVANCES } from "../consultas/qavances";

import { Card, CardTitle, Table } from "reactstrap";

export default function CAvances() {
    const { loading, data } = useQuery(GET_AVANCES);

    return (
        <React.Fragment>
          {loading ? (
            <p>Cargando Datos...</p>
          ) : (
            <div className="container">
              <div><Card body  color="primary"
        inverse>
                <CardTitle className="text-center">AVANCES DEL PROYECTO</CardTitle></Card>
              </div>
              <Table dark>
                <thead>
                  <tr>
                    <th>_id</th>
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
    
                      <button
                          className="btn btn-primary"
                          onClick={() => this.deleteFacturas(avances._id)}
                        >
                          Editar
                        </button> {" "}
    
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