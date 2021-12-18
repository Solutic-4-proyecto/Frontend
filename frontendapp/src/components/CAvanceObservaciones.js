import React, { Component } from 'react'
import axios from 'axios'


export default class CAvanceObservaciones extends Component {

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
                       <h1>Registrar Observaciones</h1>
                        <div className="card card-body align-content-center">
                            <form on onSubmit={this.onSubmit}>
                                <div className="form-group">

                                    <label for="idproyecto">ID Proyecto PR-003</label>
                                    
                                </div>

                                <div class="form-group">
                                    <label for="nombre">Observaciones</label>
                                    <textarea type="text" class="form-control"
                                        value={this.state.login}
                                        id="nombre" placeholder="Ingrese Nuevas Observaciones"
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