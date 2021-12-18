import React, { Component } from 'react'
import axios from 'axios'


export default class Cregistrar extends Component {

    state = {
        users: [],
        identificacion: '',
        nombreCompleto: '',
        correo: '',
        contrasena: '',
        rol: '',
        estado: '',
        isediting:false,
        _id:''
    }
   
    render() {
        return (
            <div className='container'>
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                       <h1>Registro de Usuarios</h1>
                        <div className="card card-body align-content-center">
                            <form on onSubmit={this.onSubmit}>
                                <div className="form-group">

                                    <label for="identificacion">Identificación</label>
                                    <input type="text" className="form-control" placeholder="Ingrese la identificación"
                                        value={this.state.identificacion}
                                        id="identificacion"
                                        onChange={this.onInputChage}
                                        required />
                                </div>

                                <div class="form-group">
                                    <label for="nombre">Nombre Completo</label>
                                    <input type="text" class="form-control"
                                        value={this.state.login}
                                        id="nombre" placeholder="Ingrese Nombre y Apellidos"
                                        onChange={this.onInputChage}
                                        required />
                                </div>

                                <div class="form-group">
                                    <label for="email">E-mail</label>
                                    <input type="email" class="form-control"
                                        value={this.state.email}
                                        id="email" aria-describedby="emailHelp" placeholder="Ingrese Email"
                                        onChange={this.onInputChage} />

                                    <small id="emailHelp" class="form-text text-muted">Nunca comparta su usuario o email con nadie.</small>
                                </div>

                                <div class="form-group">
                                    <label for="clave">Contraseña</label>
                                    <input type="password" class="form-control"
                                        value={this.state.clave}
                                        id="clave" placeholder="Contraseña"
                                        onChange={this.onInputChage}
                                        required />
                                </div>

                                <div class="form-group">
                                    <label for="clave1">Reingrese su Contraseña</label>
                                    <input type="password" class="form-control"
                                        value={this.state.clave}
                                        id="clave1" placeholder="Repita su contraseña"
                                        onChange={this.onInputChage}
                                        required />
                                </div>

                                
                                <div class="form-group">
                                    <label for="perfil">Rol</label>
                                    <select class="form-control"
                                        id="perfil"
                                        onChange={this.onInputChage}>
                                        <option selected>Seleccione Rol que Desea...</option>
                                        <option>Administrador</option>
                                        <option>Líder</option>
                                        <option>Estudiante</option>
                                    </select>
                                </div>


                                <button type="submit" className="btn btn-primary">
                                    Grabar
                                </button>
                            </form>
                        </div>
                    </div>
                    

                </div>
            </div>
        )
    }
}