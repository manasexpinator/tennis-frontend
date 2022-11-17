import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-wrap">
          {/* <div className="nav-header bg-transparent shadow-none border-0">
            <div className="nav-top w-100">
              <a href="/">
                <i className="feather-zap text-success display1-size me-2 ms-0"></i>
                <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
                  Sociala.{" "}
                </span>{" "}
              </a>
              <button className="nav-menu me-0 ms-auto"></button>

              <a
                href="/login"
                className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"
              >
                Login
              </a>
              <a
                href="/register"
                className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl"
              >
                Register
              </a>
            </div>
          </div> */}
          <div className="row">
            <div className="col-xl-6 d-flex align-items-center justify-content-center p-3 vh-100 bg-image-cover bg-no-repeat log-bg">
              <div className="">
                <h1 className="fw-bold  text-white text-center mb-3 tennis-head">
                  Social Media for tennis
                  <br /> players, clubs and coaches
                  <br />
                </h1>
                <p className="fs-6 fw-light text-white text-center  mx-auto lh-4">
                  Connect with players near you. Join groups and record match
                  results.
                  <br /> Explore the latest video tips and content. Create
                  tournament brackets
                  <br /> & manage teams. Shop online or take a course to improve
                  your game.
                </p>
              </div>
            </div>
            <div className="col-xl-6 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
              <div className="card shadow-none border-0 ms-auto me-auto login-card">
                <div className="card-body rounded-0 text-left">
                  <img
                    className="mb-5 w-100"
                    src="assets/images/login-logo.png"
                  />
                  <div className="d-flex mb-4">
                    <h2 className="fw-700  display2-md-size">Sign in</h2>
                    <p className="fs-6 ms-auto mb-0 text-black">
                      Or Create an Account
                    </p>
                  </div>
                  <form>
                    <div className="form-group icon-input mb-3">
                      <label className="text-black fs-6">Email</label>
                      <input
                        type="text"
                        className="style2-input  form-control text-grey-900 font-xsss fw-600"
                      />
                    </div>

                    <div className="form-group icon-input mb-3">
                      <label className="text-black fs-6">Password</label>
                      <input
                        type="Password"
                        className="style2-input  form-control text-grey-900 font-xss ls-3"
                      />
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="d-flex align-items-center mb-0 fs-6">
                        <input type="checkbox" className="me-2"></input>Remember
                        Me
                      </p>

                      <p className="d-flex align-items-center mb-0 fs-6 ms-auto">
                        Forgot Password?
                      </p>
                    </div>
                    <Button
                      variant="primary"
                      className="text-white w-100 py-3 fs-4 mt-5"
                    >
                      Log In
                    </Button>
                  </form>

                  {/* <div className="col-sm-12 p-0 text-center mt-2">
                    <h6 className="mb-0 d-inline-block bg-white fw-500 font-xsss text-grey-500 mb-3">
                      Or, Sign in with your social account{" "}
                    </h6>
                    <div className="form-group mb-1">
                      <a
                        href="/register"
                        className="form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2"
                      >
                        <img
                          src="assets/images/icon-1.png"
                          alt="icon"
                          className="ms-2 w40 mb-1 me-5"
                        />{" "}
                        Sign in with Google
                      </a>
                    </div>
                    <div className="form-group mb-1">
                      <a
                        href="/register"
                        className="form-control text-left style2-input text-white fw-600 bg-twiiter border-0 p-0 "
                      >
                        <img
                          src="assets/images/icon-3.png"
                          alt="icon"
                          className="ms-2 w40 mb-1 me-5"
                        />{" "}
                        Sign in with Facebook
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
