import React from "react";
import { Form } from "react-bootstrap";
import DocumentTable from "../components/DocumentTable";

const MediaTabGrid = () => {
  return (
    <div>
      <div className="action-icons mt-4 d-flex justify-content-end">
        <button className="border-0 bg-transparent">
          <img src="assets/images/delete.png" />
        </button>
        <button className="border-0 bg-transparent ms-3">
          <img src="assets/images/check.png" />
        </button>
      </div>
      <div className="row mt-4">
        <div className="col">
          <img className="w-100" src="assets/images/product.png" />
        </div>
        <div className="col">
          <img className="w-100" src="assets/images/product.png" />
        </div>
        <div className="col">
          <img className="w-100" src="assets/images/product.png" />
        </div>
        <div className="col">
          <img className="w-100" src="assets/images/product.png" />
        </div>
        <div className="col">
          <img className="w-100" src="assets/images/product.png" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <img className="w-100" src="assets/images/product.png" />
        </div>
        <div className="col">
          <img className="w-100" src="assets/images/product.png" />
        </div>
        <div className="col">
          <img className="w-100" src="assets/images/product.png" />
        </div>
        <div className="col">
          <img className="w-100" src="assets/images/product.png" />
        </div>
        <div className="col">
          <img className="w-100" src="assets/images/product.png" />
        </div>
      </div>

      <div className="video-part border rounded mt-5 p-4">
        <div className="d-flex">
          <h4 className="text-black fw-bold m-0">Videos</h4>
          <button className="rounded border-0 px-2 py-1 ms-auto align-items-center  text-black">
            Add Videos
          </button>
        </div>
        <div className="action-icons mt-4 d-flex justify-content-end">
          <button className="border-0 bg-transparent">
            <img src="assets/images/delete.png" />
          </button>
          <button className="border-0 bg-transparent ms-3">
            <img src="assets/images/check.png" />
          </button>
        </div>

        <div className="show-video">
          <img className="w-auto" src="assets/images/product.png" />
        </div>
      </div>

      <div className="document-part mt-5 p-4 border rounded">
        <div className="d-flex align-items-center">
          <div>
            <h5 className="text-black fw-bold fs-3 mb-0">Documents</h5>
          </div>
          <div className="d-flex justify-content-end ms-auto mb-4">
            <Form className="position-relative">
              <i class="feather-search doc-srch position-absolute font-xss text-grey-500"></i>
              <input
                className="border rounded px-4 py-1 w-100"
                type="search"
                placeholder="Search Documents..."
              />
            </Form>

            <button
              className="text-capitalize text-black rounded px-4 py-1 border-0 d-flex align-items-center ms-2"
              type="btn"
            >
              <i class="feather-upload  font-xss text-black me-2"></i>
              upload files
            </button>

            <button
              className="text-capitalize text-black rounded px-4 py-1 border-0 d-flex align-items-center ms-2"
              type="btn"
            >
              <i class="feather-folder  font-xss text-black me-2"></i>
              Create Folder
            </button>
          </div>
        </div>
        <DocumentTable />
      </div>
    </div>
  );
};

export default MediaTabGrid;
