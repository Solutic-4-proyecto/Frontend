import React, { Component } from 'react'
import axios from 'axios'


export default class CActualizarProyecto extends Component {

    state = {
        proyectos: [],
        idproyecto: '',
        nombreProyecto: '',
        presupuesto: '',
        objetivosGenrales: '',
        objetivosEspecificos: '',
        isediting:false,
        _id:''
    }
   
    render() {
        return (
            <div className='container'>
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                       <h1>Edición de  Proyectos</h1>
                        <div className="card card-body align-content-center">
                            <form on onSubmit={this.onSubmit}>
                                <div className="form-group">

                                    <label for="idproyecto">ID Proyecto PR-002</label>
                                    
                                </div>

                                <div class="form-group">
                                    <label for="nombre">Nombre del Proyecto</label>
                                    <input type="text" class="form-control"
                                        value={this.state.login}
                                        id="nombre" placeholder="Nombre del Proyecto"
                                        onChange={this.onInputChage}
                                        required />
                                </div>

                                <div class="form-group">
                                    <label for="objetivo">Obetivo General</label>
                                    <textarea type="text" class="form-control"
                                        value={this.state.email}
                                        id="objetivo"  placeholder="Objetivo General"
                                        onChange={this.onInputChage} />
                                </div>

                                <div class="form-group">
                                    <label for="objetivoespecificos">Obetivos Específicos</label>
                                    <textarea type="text" class="form-control"
                                        value={this.state.email}
                                        id="objetivoespecificos"  placeholder="Objetivos Específicos del Proyecto"
                                        onChange={this.onInputChage} />
                                </div>

                                <div class="form-group">
                                    <label for="presupuesto">Presupuesto Asignado</label>
                                    <input type="text" class="form-control"
                                        value={this.state.clave}
                                        id="presupuesto" placeholder="Nuevo Presupuesto"
                                        onChange={this.onInputChage}
                                        required />
                                </div>

                                <br/>

                                <button type="submit" className="btn btn-primary">
                                    Actualizar
                                </button>
                            </form>
                        </div>
                    </div>
                    

                </div>
            </div>
        )
    }
}