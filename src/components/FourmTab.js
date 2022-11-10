import React, { Component, Fragment } from "react";
import FourmPageTitle from "./FourmPageTitle";
import FourmTabList from "./FourmTabList";

class FourmTab extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-xl-12">
            <FourmPageTitle />
            <div className="row ps-3 pe-3 justify-content-center">
              <FourmTabList />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default FourmTab;
