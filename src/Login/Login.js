import { useState } from "react";
import { authenticationService } from "../Services/authentication.service";

const Login = (props) => {
  const [inputs, setInputs] = useState({});
  const [errorMassage, setErrorMassage] = useState({});
  if (authenticationService.currentUserValue) {
    props.history.push('/');
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    authenticationService.login(inputs.username, inputs.password).then(obj => {
      if (obj.token) {
        setErrorMassage({ massage: '' });
        const { from } = props.location.state || { from: { pathname: "/" } };
        props.history.push(from);
      }
    },
      error => {
        setErrorMassage({ massage: "Invalid Credential" });
      });
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input type="email" name="username" className="form-control" placeholder="name@example.com" value={inputs.username || ""} onChange={handleChange} />
                  <label>Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" name="password" className="form-control" placeholder="Password" value={inputs.password || ""} onChange={handleChange} />
                  <label>Password</label>
                </div>
                <div className="form-floating mb-3">
                  <span className="color-red">{errorMassage.massage}</span>
                </div>
                <div className="d-grid">
                  <input type="submit" className="btn btn-primary btn-login text-uppercase fw-bold" value="Sign in" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;