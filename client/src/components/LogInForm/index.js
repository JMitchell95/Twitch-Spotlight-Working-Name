import React from "react";

const FormEventLogin = () => {
    const  handleLogIn = e => {
        e.preventDefault();
    };


return (
    <form className="form-group mt-5 mb-5" onSubmit={handleLogIn}>
      <input className="form-control mb-5" required placeholder=" Email" />
      <input className="form-control mb-5" placeholder="Password" />
      <button className="btn btn-success mt-3 mb-5" type="submit">
          Log-In
        </button>
      </form>
    );

};

export default FormEventLogin;