import React from "react";
import Music from "../../assets/images/listen.png";

const Login = () => {
  return (
    <div className="container-fluid bg-black min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-12 col-md-5">
            <div className="welcome-text small mb-3 text-white w-75">
              <h1 className="display-3 my-2 fw-bold ">Welcome to Musicify!</h1>
              <span>Discover and enjoy unlimited music anytime, anywhere.</span>
            </div>
            <form className="text-white mt-2 mb-4 w-75">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </form>
          </div>
          <div className="col-md-1"></div>

          <div className="col-12 col-md-4">
            <iframe
              className="w-100 h-100 fs-1"
              src="https://lottie.host/embed/36e63cd7-f418-47ad-a714-82a88d4ee9b4/mk3j8VNEwc.json"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
