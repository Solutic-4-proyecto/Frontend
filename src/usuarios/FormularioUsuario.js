import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_USUARIO } from "./graphql-mutations";
import { GET_USUARIOS } from "./graphql-queries";

export const FormularioUsuario = ({ data }) => {
  const [identificacion, setIdentificacion] = useState(data ? data.identificacion : "");
  const [nombreCompleto, setNombreCompleto] = useState(data ? data.nombreCompleto : "");
  const [correo, setCorreo] = useState(data ? data.correo : "");
  const [contrasena, setContrasena] = useState(data ? data.contrasena : "");
  const [rol, setRol] = useState(data ? data.rol : "Estudiante");
  const [estado, setEstado] = useState(data ? data.estado : "No Autorizado");

  const [createUsuario] = useMutation(CREATE_USUARIO, {
    refetchQueries: [{ query: GET_USUARIOS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    createUsuario({ variables: { identificacion, nombreCompleto, correo, contrasena, rol, estado } });

    setIdentificacion("");
    setNombreCompleto("");
    setCorreo("");
    setContrasena("");
  };

  return (
    <div>
      <h2>Crear nuevo Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Identificación" value={identificacion} onChange={(evt) => setIdentificacion(evt.target.value)} />
        <input placeholder="Nombre Completo" value={nombreCompleto} onChange={(evt) => setNombreCompleto(evt.target.value)} />
        <input placeholder="Correo" value={correo} onChange={(evt) => setCorreo(evt.target.value)} />
        <input placeholder="Contraseña" value={contrasena} onChange={(evt) => setContrasena(evt.target.value)} />
        <select name="rol" value={rol} onChange={(evt) => setRol(evt.target.value)}>
          <option value="Estudiante">Estudiante</option>
          <option value="Lider">Lider</option>
          <option value="Administrador">Administrador</option>
        </select>
        <select name="estado" value={estado} onChange={(evt) => setEstado(evt.target.value)}>
          <option value=">No Autorizado1">No Autorizado</option>
          <option value="Pendiente">Pendiente</option>
          <option value="Autorizado">Autorizado</option>
        </select>
        <button>Crear Usuario</button>
      </form>
    </div>
  );
};
