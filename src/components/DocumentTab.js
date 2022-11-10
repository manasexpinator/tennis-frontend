import React, { Component, Fragment } from "react";
import DocumentPageTitle from "./DocumentPageTitle";
import DocumentTabTable from "./DocumentTabTable";

class DocumentTab extends Component {
  render() {
    return (
      <Fragment>
        <div className="row ">
          <div className="col-xl-12 ">
            <DocumentPageTitle />
            <div className="row ps-2 pe-2 justify-content-center">
              <DocumentTabTable />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default DocumentTab;
