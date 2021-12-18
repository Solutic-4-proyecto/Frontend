import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_USUARIO } from "./graphql-mutations";
import { GET_USUARIOS } from "./graphql-queries";

export const FormularioUsuario = () => {
  const [identificacion, setIdentificacion] = useState("");
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const [createUsuario] = useMutation(CREATE_USUARIO, {
    refetchQueries: [{ query: GET_USUARIOS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    createUsuario({ variables: { identificacion, nombreCompleto, correo, contrasena } });

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
        <button>Crear Usuario</button>
      </form>
    </div>
  );
};
