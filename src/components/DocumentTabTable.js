import React, { Component, Fragment } from "react";
import { Table } from "react-bootstrap";

class DocumentPageTable extends Component {
  render() {
    return (
      <Fragment>
        <div className="row ps-2 pe-2 ">
          <div className="p-3 bg-white">
            <Table className="font-xss" responsive>
              <thead>
                <tr>
                  <th className="text-uppercase ">Name</th>
                  <th className="text-uppercase">Modified</th>
                  <th className="text-uppercase" colSpan={2}>
                    Visibilty
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 fw-bold">Mark</td>
                  <td className="py-3">June 5 2022</td>
                  <td className="py-3">Public</td>
                  <td className="py-3">
                    <a href="#">
                      <i className="feather-more-vertical font-xss text-grey-500"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 fw-bold">Jacob</td>
                  <td className="py-3">June 5 2022</td>
                  <td className="py-3">Public</td>
                  <td className="py-3">
                    <a href="#">
                      <i className="feather-more-vertical font-xss text-grey-500"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 fw-bold">Larry</td>
                  <td className="py-3">June 5 2022</td>
                  <td className="py-3">My Connection</td>
                  <td className="py-3">
                    <a href="#">
                      <i className="feather-more-vertical font-xss text-grey-500"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default DocumentPageTable;
