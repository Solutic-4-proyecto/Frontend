import React, { Component } from 'react'
import axios from 'axios'


export default class CregistrarProyecto extends Component {

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
                       <h1>Crear Proyecto</h1>
                        <div className="card card-body align-content-center">
                            <form on onSubmit={this.onSubmit}>
                                <div className="form-group">

                                    <label for="idproyecto">ID Proyecto</label>
                                    <input type="text" className="form-control" placeholder="Ingrese un Identificador de Proyecto"
                                        value={this.state.identificacion}
                                        id="idproyecto"
                                        onChange={this.onInputChage}
                                        required />
                                </div>

                                <div class="form-group">
                                    <label for="nombre">Nombre del Proyecto</label>
                                    <input type="text" class="form-control"
                                        value={this.state.login}
                                        id="nombre" placeholder="Ingrese Nombre del Proyecto"
                                        onChange={this.onInputChage}
                                        required />
                                </div>

                                <div class="form-group">
                                    <label for="objetivo">Obetivo General</label>
                                    <textarea type="text" class="form-control"
                                        value={this.state.email}
                                        id="objetivo"  placeholder="Ingrese Objetivo General"
                                        onChange={this.onInputChage} />
                                </div>

                                <div class="form-group">
                                    <label for="objetivoespecificos">Obetivos Específicos</label>
                                    <textarea type="text" class="form-control"
                                        value={this.state.email}
                                        id="objetivoespecificos"  placeholder="Ingrese los Objetivos Específicos del Proyecto"
                                        onChange={this.onInputChage} />
                                </div>

                                <div class="form-group">
                                    <label for="presupuesto">Presupuesto Asignado</label>
                                    <input type="text" class="form-control"
                                        value={this.state.clave}
                                        id="presupuesto" placeholder="Presupuesto en Dinero"
                                        onChange={this.onInputChage}
                                        required />
                                </div>

                                <br/>

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