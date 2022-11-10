import React, { Component, Fragment } from "react";
import Pagetitle from "../components/Pagetitle";
import Load from "../components/Load";

const GroupList = [
  {
    imageUrl: "user.png",
    name: "Aliqa Macale",
    public: "Public",
    meetup: "Meet up",
    connections: "55.7k",
    follower: "105k",
    following: "71k",
    badge1: "top-student.svg",
    badge2: "onfire.svg",
    badge3: "",
    badge4: "fast-graduate.svg",
    bgImage: "group.png",
  },
  {
    imageUrl: "user.png",
    name: "Hendrix Stamp",
    public: "Public",
    meetup: "Meet up",
    connections: "55.7k",
    follower: "105k",
    following: "71k",
    badge1: "top-student.svg",
    badge2: "onfire.svg",
    badge3: "challenge-medal.svg",
    badge4: "fast-graduate.svg",
    bgImage: "group.png",
  },
  {
    imageUrl: "user.png",
    name: "Stephen Grider",
    public: "Public",
    meetup: "Meet up",
    connections: "55.7k",
    follower: "105k",
    following: "71k",
    badge1: "",
    badge2: "onfire.svg",
    badge3: "challenge-medal.svg",
    badge4: "fast-graduate.svg",
    bgImage: "group.png",
  },
  {
    imageUrl: "user.png",
    name: "Mohannad Zitoun",
    public: "Public",
    meetup: "Meet up",
    connections: "55.7k",
    follower: "105k",
    following: "71k",
    badge1: "top-student.svg",
    badge2: "",
    badge3: "challenge-medal.svg",
    badge4: "fast-graduate.svg",
    bgImage: "group.png",
  },
  {
    imageUrl: "user.png",
    name: "Aliqa Macale",
    public: "Public",
    meetup: "Meet up",
    connections: "55.7k",
    follower: "105k",
    following: "71k",
    badge1: "top-student.svg",
    badge2: "onfire.svg",
    badge3: "challenge-medal.svg",
    badge4: "fast-graduate.svg",
    bgImage: "group.png",
  },
  {
    imageUrl: "user.png",
    name: "Surfiya Zakir",
    public: "Public",
    meetup: "Meet up",
    connections: "55.7k",
    follower: "105k",
    following: "71k",
    badge1: "top-student.svg",
    badge2: "onfire.svg",
    badge3: "challenge-medal.svg",
    badge4: "fast-graduate.svg",
    bgImage: "group.png",
  },
];
class GroupTabGrid extends Component {
  render() {
    return (
      <Fragment>
        <div className="d-flex mt-3 mb-5">
          <button className="fs-6 rounded border text-black py-1 px-2 bg-white">
            My Groups
          </button>
          <button className="fs-6  border-0 text-black px-2 py-1 ms-5 bg-transparent">
            All Groups
          </button>
          <button className="fs-6  border-0 text-black px-2 py-1 ms-5 bg-transparent">
            Create New Group
          </button>
        </div>
        <div className="row px-0">
          {GroupList.map((value, index) => (
            <div key={index} className="col-md-4 col-sm-6 pe-2 ps-2">
              <div
                className="card d-block group-col border p-1 shadow-xss overflow-hidden mb-3"
                style={{ borderRadius: "12px" }}
              >
                <div
                  className="card-body position-relative h150 bg-image-cover bg-image-center"
                  style={{
                    backgroundImage: `url("assets/images/${value.bgImage}")`,
                  }}
                ></div>
                <div className="card-body d-block w-100 p-4 text-center position-relative ">
                  <figure
                    className="avatar ms-auto me-auto mb-0 position-absolute w90 z-index-1 left-0 right-0"
                    style={{ marginTop: `-70px` }}
                  >
                    <img
                      src={`assets/images/${value.imageUrl}`}
                      alt="avater"
                      className="float-right p-1 bg-white  w-100"
                      style={{ borderRadius: "12px" }}
                    />
                  </figure>

                  <div className="clearfix"></div>
                  <h4 className="fw-700 font-xss mt-4 mb-0">{value.name} </h4>
                  <p className="fw-500 font-xssss text-grey-500 mt-0 mb-3 item-meta">
                    <span class="group-visibility public">{value.public}</span>
                    <span class="group-type bb-current-group-meetups">
                      {value.meetup}
                    </span>
                  </p>
                  <ul className="d-flex align-items-center justify-content-center mt-1 grp-list">
                    <li className="m-2">
                      <h4 className="fs-5 fw-500 mt-1 text-black-50 d-block">
                        <span className="fs-5 fw-500 mt-1 text-black-50 d-block">
                          Posts
                        </span>
                        {value.connections}{" "}
                      </h4>
                    </li>
                    <li className="m-2">
                      <h4 className="fs-5 fw-500 mt-1 text-black-50 d-block">
                        <span className="fs-5 fw-500 mt-1 text-black-50 d-block">
                          Members
                        </span>
                        {value.follower}{" "}
                      </h4>
                    </li>
                    <li className="m-2">
                      <h4 className="fs-5 fw-500 mt-1 text-black-50 d-block">
                        <span className="fs-5 fw-500 mt-1 text-black-50 d-block">
                          Visits
                        </span>
                        {value.following}{" "}
                      </h4>
                    </li>
                  </ul>
                  <ul className="d-flex align-items-center justify-content-center mt-1 groupUsers">
                    {value.badge1 ? (
                      <li className="m-1">
                        <img src={`assets/images/${value.badge1}`} alt="icon" />
                      </li>
                    ) : (
                      ""
                    )}
                    {value.badge2 ? (
                      <li className="m-1">
                        <img src={`assets/images/${value.badge2}`} alt="icon" />
                      </li>
                    ) : (
                      ""
                    )}
                    {value.badge3 ? (
                      <li className="m-1">
                        <img src={`assets/images/${value.badge3}`} alt="icon" />
                      </li>
                    ) : (
                      ""
                    )}
                    {value.badge4 ? (
                      <li className="m-1">
                        <img src={`assets/images/${value.badge4}`} alt="icon" />
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                  <a
                    href="#follow"
                    className="mt-4 p-0 btn p-2 lh-sm w100 mx-auto ls-3 d-flex align-items-center rounded bg-grey font-xsssss fw-700 ls-lg text-black"
                  >
                    <i class="feather-check font-xss"></i>
                    Organizer
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default GroupTabGrid;
