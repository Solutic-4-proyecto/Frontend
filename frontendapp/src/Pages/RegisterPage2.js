import React, { useState } from 'react'
import {  useMutation } from '@apollo/client'
import { CREATE_USUARIOS } from '../consultas/qusuarios'

/*
const CREATE_USUARIOS=gql`
    mutation($input: UsuariosInput!){
    createUsuario(input:$input){
      identificacion
      nombreCompleto
      correo
      contrasena
      rol
      estado
    }
  }`*/



  const RegisterPage = () => {
    const [identificacion, setIdentificacion] = useState('')
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [rol, setRol] = useState('')
    const [estado, setEstado] = useState('')

  
    const [ createPerson ] = useMutation(CREATE_USUARIOS)
  
    const submit = (event) => {
    event.preventDefault()
    console.log("Hola")
    console.log(identificacion,nombre,correo,contrasena,rol,estado)
    createPerson({  input: { identificacion, nombre, correo, contrasena,rol,estado } })
  

  }
  
    return (
      <div>
        <h2>Registro de Usuario</h2>
        <form onSubmit={submit}>
          <div>
            Identificación <input value={identificacion}
              onChange={({ target }) => setIdentificacion(target.value)}
            />
          </div>
          <div>
            Nombre Completo <input value={nombre}
              onChange={({ target }) => setNombre(target.value)}
            />
          </div>
          <div>
            Correo <input value={correo}
              onChange={({ target }) => setCorreo(target.value)}
            />
          </div>
          <div>
            Contraseña <input value={contrasena}
              onChange={({ target }) => setContrasena(target.value)}
            />
          </div>
          <div>
            Rol <input value={rol}
              onChange={({ target }) => setRol(target.value)}
            />
          </div>
          <div>
            Estado <input value={estado}
              onChange={({ target }) => setEstado(target.value)}
            />
          </div>
          <button type='submit'>Crear</button>
        </form>
      </div>
    )
  }
  
  export default RegisterPage