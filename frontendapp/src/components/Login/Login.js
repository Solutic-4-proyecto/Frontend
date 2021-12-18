import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="container center card-body">
          <div className="text-center">
              <h3>Por favor diligencie sus datos de acceso para poder ingresar a la aplicación</h3>
          </div>
        <form>
          <div className="mb-3">
            <label for="email" className="form-label">
              E-mail Registrado
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            ></input>
            <div id="emailHelp" className="form-text">
              Nunca comparta su e-mail.
            </div>
          </div>

          <div class="mb-3">
            <label for="contrasena" class="form-label">
              Clave Actual
            </label>
            <input
              type="contrasena"
              class="form-control"
              id="contrasena"
            ></input>
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            ></input>
            <label class="form-check-label" for="exampleCheck1">
              Recordarme
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        <br/>
        <div> olvido sus datos de ingreso</div>
        <div> Registrarme</div>
      </div>
    );
  }
}
