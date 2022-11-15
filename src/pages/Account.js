import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Leftnav from "../components/Leftnav";
import Rightchat from "../components/Rightchat";
import Appfooter from "../components/Appfooter";
import Popupchat from "../components/Popupchat";
import ExportApi from "../api/ExportApi";
import { useFormik } from "formik";
import * as Yup from "yup";
const Account = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      fName: "",
      lName: "",
      Phone: "",
      Country: "",
      Address: "",
      City: "",
      Postcode: "",
      Draganddrop: "",
      Description: "",
    },
    validationSchema: Yup.object({
      Description: Yup.string().required("This field is required"),
      City: Yup.string().required("This field is required"),
      Address: Yup.string().required("This field is required"),
      Country: Yup.string().required("This field is required"),
      Phone: Yup.string().required("This field is required"),
      lName: Yup.string().required("This field is required"),
      fName: Yup.string().required("This field is required"),
      Postcode: Yup.string().required("This field is required"),

      email: Yup.string()
        .email("Please enter valid email address")
        .required("This field is required."),
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
      <Header />
      <Leftnav />
      <Rightchat />

      <div className="main-content bg-lightblue theme-dark-bg right-chat-active">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left">
            <div className="middle-wrap">
              <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-3">
                  <Link to="/defaultsettings" className="d-inline-block mt-2">
                    <i className="ti-arrow-left font-sm text-white"></i>
                  </Link>
                  <h4 className="font-xs text-white fw-600 ms-4 mb-0 mt-2">
                    Account Details
                  </h4>
                </div>
                <div className="card-body p-lg-5 p-4 w-100 border-0 ">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 text-center">
                      <figure className="avatar ms-auto me-auto mb-0 mt-2 w100">
                        <img
                          src="https://via.placeholder.com/300x300.png"
                          alt="avater"
                          className="shadow-sm rounded-3 w-100"
                        />
                      </figure>
                      <h2 className="fw-700 font-sm text-grey-900 mt-3">
                        Surfiya Zakir
                      </h2>
                      <h4 className="text-grey-500 fw-500 mb-3 font-xsss mb-4">
                        Brooklyn
                      </h4>
                    </div>
                  </div>

                  <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="fName"
                            className="form-control"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fName}
                          />
                          {formik.touched.fName && formik.errors.fName ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.fName}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="lName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lName}
                          />
                          {formik.touched.lName && formik.errors.lName ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.lName}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Email
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                          />
                          {formik.touched.email && formik.errors.email ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.email}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Phone
                          </label>
                          <input
                            type="text"
                            name="Phone"
                            className="form-control"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Phone}
                          />
                          {formik.touched.Phone && formik.errors.Phone ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.Phone}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Country
                          </label>
                          <input
                            type="text"
                            name="Country"
                            className="form-control"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Country}
                          />
                          {formik.touched.Country && formik.errors.Country ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.Country}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-lg-12 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Address
                          </label>
                          <input
                            type="text"
                            name="Address"
                            className="form-control"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Address}
                          />
                          {formik.touched.Address && formik.errors.Address ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.Address}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Twon / City
                          </label>
                          <input
                            type="text"
                            name="City"
                            className="form-control"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.City}
                          />
                          {formik.touched.City && formik.errors.City ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.City}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Postcode
                          </label>
                          <input
                            type="text"
                            name="Postcode"
                            className="form-control"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Postcode}
                          />
                          {formik.touched.Postcode && formik.errors.Postcode ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.Postcode}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-lg-12 mb-3">
                        <div className="card mt-3 border-0">
                          <div className="card-body d-flex justify-content-between align-items-end p-0">
                            <div className="form-group mb-0 w-100">
                              <input
                                type="file"
                                name="file"
                                id="file"
                                className="input-file"
                              />
                              <label
                                htmlFor="file"
                                className="rounded-3 text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed"
                              >
                                <i className="ti-cloud-down large-icon me-3 d-block"></i>
                                <span className="js-fileName">
                                  Drag and drop or click to replace
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12 mb-3">
                        <label className="mont-font fw-600 font-xsss mb-2 text-dark">
                          Description
                        </label>
                        <textarea
                          className="form-control mb-0 p-3 h100 bg-greylight lh-16"
                          rows="5"
                          placeholder="Write your message..."
                          name="Description"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Description}
                        />
                        {formik.touched.Description &&
                        formik.errors.Description ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.Description}
                          </div>
                        ) : null}
                      </div>

                      <div className="col-lg-12">
                        <button
                          type="submit"
                          //   href="/accountinformation"
                          className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Popupchat />
      <Appfooter />
    </Fragment>
  );
};

export default Account;
