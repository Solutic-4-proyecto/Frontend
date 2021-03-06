import React, { useState } from "react";
import { useCreateUsuario, useUpdateUsuario } from "./custom-hooks";

export const FormularioUsuario = ({ isUpdate, data }) => {
  const [identificacion, setIdentificacion] = useState(isUpdate ? data.identificacion : "");
  const [nombreCompleto, setNombreCompleto] = useState(isUpdate ? data.nombreCompleto : "");
  const [correo, setCorreo] = useState(isUpdate ? data.correo : "");
  const [contrasena, setContrasena] = useState(isUpdate ? data.contrasena : "");
  const [rol, setRol] = useState(isUpdate ? data.rol : "Estudiante");
  const [estado, setEstado] = useState(isUpdate ? data.estado : "No Autorizado");

  const [createUsuario] = useCreateUsuario();
  const [updateUsuario] = useUpdateUsuario();

  const handleSubmit = (e) => {
    e.preventDefault();

    let usuario = {
      identificacion,
      nombreCompleto,
      correo,
      contrasena,
      rol,
      estado,
    };

    if (isUpdate) {
      updateUsuario({ variables: { _id: data._id, usuario } });
    } else {
      createUsuario({ variables: { usuario } });
      setIdentificacion("");
      setNombreCompleto("");
      setCorreo("");
      setContrasena("");
    }
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
          <option value="No Autorizado">No Autorizado</option>
          <option value="Pendiente">Pendiente</option>
          <option value="Autorizado">Autorizado</option>
        </select>
        <button>Crear Usuario</button>
      </form>
    </div>
  );
};
