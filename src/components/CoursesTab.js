import React, { Component, Fragment } from "react";
import CoursesPageTitle from "./CoursesPageTitle";
import CoursesTabGrid from "./CoursesTabGrid";

class CoursesTab extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-xl-12">
            <CoursesPageTitle />
            <div className="row ps-2 pe-2 justify-content-center">
              <CoursesTabGrid />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CoursesTab;
