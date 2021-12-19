import React from "react";

const HeaderPage = ({ name, nombreBoton, actionBoton }) => {
  return (
    <>
      <div className="row w-100 p-4">
        <div className="container-fluid ">
          <div className="row">
            <div class="col-md-6">
              <h3>{name}</h3>
            </div>
            <div class="col-md-5">
              <button className="btn btn-primary float-right" onClick={() => actionBoton()}>
                {nombreBoton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
