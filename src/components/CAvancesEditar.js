import React, { Component } from 'react'
import axios from 'axios'


export default class CAvancesEditar extends Component {

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
                       <h1>Edición de Avances</h1>
                        <div className="card card-body align-content-center">
                            <form on onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label for="idproyecto">ID Proyecto PR-003</label>
                                </div>

                                <div className="form-group">
                                    <label for="idproyecto">ID Avance 61b62ad260bcc685b9e4440b</label>
                                </div>

                                <div class="form-group">
                                    <label for="nombre">Actualización de Avance</label>
                                    <textarea type="text" class="form-control"
                                        value={this.state.login}
                                        id="nombre" placeholder="Actualización de Avance"
                                        onChange={this.onInputChage}
                                        required />
                                </div>

                                <br/>

                                <button type="submit" className="btn btn-primary">
                                    Guardar
                                </button>
                            </form>
                        </div>
                    </div>
                    

                </div>
            </div>
        )
    }
}