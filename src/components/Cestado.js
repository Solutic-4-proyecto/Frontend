import React, { Component } from 'react'
import axios from 'axios'


export default class CEstado extends Component {

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
                       <h1>Cambiar Estado a Usuario</h1>
                        <div className="card card-body align-content-center">
                            <form on onSubmit={this.onSubmit}>
                                <div className="form-group">

                                    <label for="identificacion">Identificación 300</label>
                                    
                                </div>

                                <div class="form-group">
                                    <label for="nombre">Nombre Completo Usuario Prueba 3</label>
                                    
                                </div>

                                
                                <div class="form-group">
                                    <label for="perfil">Estado</label>
                                    <select class="form-control"
                                        id="perfil"
                                        onChange={this.onInputChage}>
                                        <option selected>Seleccione Estado de Usuario...</option>
                                        <option>Pendiente</option>
                                        <option>Autorizado</option>
                                        <option>No_Autorizado</option>
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