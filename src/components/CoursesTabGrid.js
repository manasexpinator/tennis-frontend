import React, { Component, Fragment } from "react";
import { ProgressBar } from "react-bootstrap";

const CourseList = [
  {
    imageUrl: "product.png",
    title: "Montana Hotel",
    lessons: "3 Lessons",
    feature: "feature",
    imageUrlUser: "user.png",
  },
  {
    imageUrl: "product.png",
    title: "Himalayan Wind Horse",
    lessons: "3 Lessons",
    feature: "",
    imageUrlUser: "user.png",
  },
  {
    imageUrl: "product.png",
    title: "Hotel Sonar Bangla",
    lessons: "3 Lessons",
    feature: "feature",
    imageUrlUser: "user.png",
  },
  {
    imageUrl: "product.png",
    title: "House Pool Party",
    lessons: "3 Lessons",
    feature: "feature",
    imageUrlUser: "user.png",
  },
  {
    imageUrl: "product.png",
    title: "Silver Star Boutique",
    lessons: "3 Lessons",
    feature: "",
    imageUrlUser: "user.png",
  },
  {
    imageUrl: "product.png",
    title: "Crown Retreat Hotel",
    lessons: "3 Lessons",
    feature: "feature",
    imageUrlUser: "user.png",
  },
];

class CoursesTabGrid extends Component {
  render() {
    return (
      <Fragment>
        <div className="row ps-2 pe-2 ">
          {CourseList.map((value, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-4 col-sm-4 mb-3 pe-2 ps-2"
            >
              <div className="card w-100 p-0 hover-card shadow-xss border-0 rounded-5 overflow-hidden me-1">
                {value.feature ? (
                  <span
                    className="font-xsssss fw-700 ps-3 pe-3 lh-32 text-uppercase ls-2 bg-primary-gradiant d-inline-block text-white position-absolute mt-3 z-index-1"
                    style={{ borderRadius: "0px 20px 20px 0px" }}
                  >
                    Featured
                  </span>
                ) : (
                  ""
                )}
                <div className="card-image w-100 mb-3">
                  <a
                    href="/defaulthoteldetails"
                    className="position-relative d-block"
                  >
                    <img
                      src={`assets/images/${value.imageUrl}`}
                      alt="hotel"
                      className="w-100"
                    />
                  </a>
                </div>
                <div className="card-body pt-0">
                  <h5 className="font-xssss text-grey-500 fw-600 mt-0 mb-1">
                    {value.lessons}
                  </h5>
                  <h4 className="fw-700 font-md mt-0 lh-28 mb-0">
                    <a
                      href="default-hotel-details.html"
                      className="text-dark text-grey-900"
                    >
                      {value.title}
                    </a>
                  </h4>

                  <h5 className="mt-2 d-inline-block font-xssss fw-600 text-grey-500 me-2">
                    <img
                      src={`assets/images/${value.imageUrlUser}`}
                      alt="user"
                      className="w35 me-3 rounded-circle"
                    />
                    John
                  </h5>
                  <ProgressBar
                    variant="secondory"
                    now={60}
                    style={{ height: "5px" }}
                  />
                  <div className="clearfix"></div>
                  <span className="font-lg fw-700 mt-0 pe-3 ls-2 lh-20 d-inline-block text-success float-left">
                    <span className="font-xsssss text-grey-500">
                      0% Complete
                    </span>
                  </span>
                  <div className="clearfix"></div>
                  <span className="font-lg fw-700 mt-0 pe-3 ls-2 lh-20 d-inline-block text-success float-left">
                    <span className="font-xsssss text-grey-500">
                      0/10 Steps
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}
export default CoursesTabGrid;
