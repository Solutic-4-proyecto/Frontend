import React, { Component } from 'react'
import axios from 'axios'


export default class CActualizarEstadoProyecto extends Component {

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
                       <h1>Aprobar Proyecto</h1>
                        <div className="card card-body align-content-center">
                            <form on onSubmit={this.onSubmit}>
                                <div className="form-group">

                                    <label for="identificacion">ID Proyecto PR-001</label>
                                    
                                </div>

                                <div class="form-group">
                                    <label for="nombre">Nombre Proyecto Proyecto web</label>
                                    
                                </div>

                                
                                <div class="form-group">
                                    <label for="perfil">Estado Proyecto</label>
                                    <select class="form-control"
                                        id="perfil"
                                        onChange={this.onInputChage}>
                                        <option selected>Seleccione Estado de Proyecto...</option>
                                        <option>Inactivo</option>
                                        <option>Activo</option>
                                    </select>
                                </div>


                                <button type="submit" className="btn btn-primary">
                                    Cambiar Estado
                                </button>
                            </form>
                        </div>
                    </div>
                    

                </div>
            </div>
        )
    }
}