import React, { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ExportApi from "../api/ExportApi";
const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
      username: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Password must be 8 characters long")
        .required("Enter your password"),
      username: Yup.string()
        // .min(8, "Password must be 8 characters long")
        .required("Enter your User name"),
      passwordConfirmation: Yup.string()
        .required("Enter your Confirm Password")
        .oneOf([Yup.ref("password"), null], "Confirm Password must match"),
      email: Yup.string()
        .email("Please enter valid email address")
        .required("Enter your email address"),
    }),
    onSubmit: (values) => {
      ExportApi.UserLogin(values.email, values.password)
        .then((resp) => {
          if (resp.data) {
            if (resp.data.code == 200) {
              // localStorage.setItem("Token", resp.data.data[0].token);
              // localStorage.setItem("username", resp.data.data[0].first_name);
              // navigate("/webinar/dashboard");
              // props.active(false);
            } else {
              // setErr(true);
              // props.active(true);
              // setErr(resp.data.message);
            }
          }
        })
        .catch((err) => console.log(err));
    },
  });
  return (
    <Fragment>
      <div className="main-wrap">
        <div className="nav-header bg-transparent shadow-none border-0">
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
        </div>

        <div className="row">
          <div
            className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
            style={{
              backgroundImage: `url("https://via.placeholder.com/800x950.png")`,
            }}
          ></div>
          <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
            <div className="card shadow-none border-0 ms-auto me-auto login-card">
              <div className="card-body rounded-0 text-left">
                <h2 className="fw-700 display1-size display2-md-size mb-4">
                  Create <br />
                  your account
                </h2>
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-user text-grey-500 pe-0"></i>
                    <input
                      type="text"
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Your Name"
                      name="username"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.username}
                    />
                  </div>
                  {formik.touched.username && formik.errors.username ? (
                    <div style={{ color: "red" }}>{formik.errors.username}</div>
                  ) : null}

                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-email text-grey-500 pe-0"></i>
                    <input
                      type="email"
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Your Email Address"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <div style={{ color: "red" }}>{formik.errors.email}</div>
                  ) : null}
                  <div className="form-group icon-input mb-3">
                    <input
                      type="Password"
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="Password"
                      name="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <div style={{ color: "red" }}>{formik.errors.password}</div>
                  ) : null}
                  <div className="form-group icon-input mb-1">
                    <input
                      type="Password"
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="Confirm Password"
                      name="passwordConfirmation"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.passwordConfirmation}
                    />
                    <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                  </div>
                  {formik.touched.passwordConfirmation &&
                  formik.errors.passwordConfirmation ? (
                    <div style={{ color: "red" }}>
                      {formik.errors.passwordConfirmation}
                    </div>
                  ) : null}

                  <div className="form-check text-left mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input mt-2"
                      id="exampleCheck2"
                    />
                    <label className="form-check-label font-xsss text-grey-500">
                      Accept Term and Conditions
                    </label>
                  </div>
                  <div className="form-group mb-1">
                    <button
                      type="submit"
                      className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                    >
                      Register
                    </button>
                  </div>
                </form>

                <div className="col-sm-12 p-0 text-left">
                  <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                    Already have account{" "}
                    <a href="/login" className="fw-700 ms-1">
                      Login
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
