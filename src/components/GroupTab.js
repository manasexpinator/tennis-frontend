import React, { Component, Fragment } from "react";
import GroupPageTitle from "./GroupPageTitle";
import GroupTabGrid from "./GroupTabGrid";

class GroupTab extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-xl-12">
            <GroupPageTitle />
            <div className="row ps-3 pe-3 justify-content-center">
              <GroupTabGrid />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default GroupTab;
