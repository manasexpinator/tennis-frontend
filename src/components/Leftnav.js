import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { Button, Image } from "react-bootstrap";

class Leftnav extends Component {
  //   handleQueryString = () => {
  //     // Parsing the query string

  //     //let queries = queryString.parse(this.props.location.search);
  //     console.log("checkkkk", window.location.pathname);
  //     console.log("first");
  //     console.log("props", this.props.children);
  //     //this.setState(queries);
  //   };

  state = { isActive: false };

  toggleClass = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    const isActive = this.state.isActive;
    console.log("check", isActive);

    return (
      <div className="navigation scroll-bar">
        <div className="container ps-0 pe-0">
          <div className="nav-content pt-4">
            <div className="nav-caption fw-600 font-xs text-black-400 ps-0">
              <span className="text-black">Community </span>
            </div>
            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl  pb-1 mb-2 mt-2">
              <ul className="mb-1 top-content">
                <li className="logo d-none d-xl-block d-lg-block"></li>

                <li>
                  <Link to="" className="nav-content-bttn open-font">
                    <Image
                      src="assets/images/user.png"
                      className="img-fluid me-3"
                      width={30}
                    />
                    <span>Luke Hodgkin</span>
                  </Link>
                </li>

                <li>
                  <Link to="" className="nav-content-bttn open-font">
                    <Image
                      src="assets/images/frnd.png"
                      className="img-fluid me-3"
                      width={30}
                    />
                    <span>Friends</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/defaultbadge"
                    className="nav-content-bttn open-font"
                  >
                    <Image
                      src="assets/images/groups.svg"
                      className="img-fluid me-3"
                      width={30}
                    />
                    <span>Groups</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/defaultstorie"
                    className="nav-content-bttn open-font"
                  >
                    <Image
                      src="assets/images/sidebar-icons/forum.svg"
                      className="img-fluid me-3"
                      width={30}
                    />
                    <span>Fourms</span>
                  </Link>
                </li>

                <li className="dropdown">
                  <Button
                    className="nav-content-bttn open-font dropdown-toggle"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={this.toggleClass}
                  >
                    <Image
                      src="assets/images/sidebar-icons/search.svg"
                      className="img-fluid me-3"
                      width={30}
                    />
                    <span>Search</span>
                    <Image
                      className="ms-auto"
                      src="assets/images/botm_arw.svg"
                    />
                  </Button>

                  {isActive ? (
                    <ul className="mb-1 top-content">
                      <li>
                        <Link
                          to="/defaultgroup"
                          className="nav-content-bttn open-font"
                        >
                          <Image
                            src="assets/images/sidebar-icons/players.svg"
                            className="img-fluid me-3"
                            width={30}
                          />
                          <span>Players</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/defaultgroup"
                          className="nav-content-bttn open-font"
                        >
                          <Image
                            src="assets/images/sidebar-icons/clubs-icon-grey.png"
                            className="img-fluid me-3"
                            width={30}
                          />
                          <span>Clubs</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/defaultgroup"
                          className="nav-content-bttn open-font"
                        >
                          <Image
                            src="assets/images/sidebar-icons/groups.svg"
                            className="img-fluid me-3"
                            width={30}
                          />
                          <span>Coaches</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/defaultgroup"
                          className="nav-content-bttn open-font"
                        >
                          <Image
                            src="assets/images/sidebar-icons/events.svg"
                            className="img-fluid me-3"
                            width={30}
                          />
                          <span>Events</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/userpage"
                          className="nav-content-bttn open-font"
                        >
                          <Image
                            src="assets/images/sidebar-icons/jobs.svg"
                            className="img-fluid me-3"
                            width={30}
                          />
                          <span>Jobs </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/userpage"
                          className="nav-content-bttn open-font"
                        >
                          <Image
                            src="assets/images/sidebar-icons/fundraisers.svg"
                            className="img-fluid me-3"
                            width={30}
                          />
                          <span>Fundraisers</span>
                        </Link>
                      </li>
                    </ul>
                  ) : null}

                  {/*  */}
                </li>
              </ul>
            </div>

            <div className="nav-caption fw-600 font-xs text-black-400 ps-0 mt-3">
              <span className="text-black">Social Media </span>
            </div>
            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl  pb-1 mb-2 mt-2">
              <ul className="mb-1 top-content">
                <li>
                  <Link
                    to="/userpagenew"
                    className="nav-content-bttn open-font"
                    onClick={this.handleQueryString}
                  >
                    <Image
                      src="assets/images/sidebar-icons/news-feed.svg"
                      className="img-fluid me-3"
                      width={30}
                    />
                    <span>News Feed</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/defaultbadge"
                    className="nav-content-bttn open-font"
                  >
                    <Image
                      src="assets/images/sidebar-icons/stories.svg"
                      className="img-fluid me-3"
                      width={30}
                    />
                    <span>Reels</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/defaultstorie"
                    className="nav-content-bttn open-font"
                  >
                    <Image
                      src="assets/images/sidebar-icons/video.svg"
                      className="img-fluid me-3"
                      width={30}
                    />
                    <span>Video</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/defaultgroup"
                    className="nav-content-bttn open-font"
                  >
                    <Image
                      src="assets/images/sidebar-icons/live.svg"
                      className="img-fluid me-3"
                      width={30}
                    />
                    <span>Live</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="nav-caption fw-600 font-xs text-black-400 ps-0 mt-3">
              <span className="text-black">Tennis Apps </span>
            </div>
            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl  pb-1 mb-2 mt-2">
              <ul className="mb-1 top-content">
                <li className="logo d-none d-xl-block d-lg-block"></li>

                <li>
                  <Link
                    to="/userpagenew"
                    className="nav-content-bttn open-font"
                    onClick={this.handleQueryString}
                  >
                    <Image
                      src="assets/images/sidebar-icons/tournaments-icon-grey.png"
                      className="img-fluid me-3"
                      width={30}
                    />
                    <span>Tournaments</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/defaultbadge"
                    className="nav-content-bttn open-font"
                  >
                    <Image
                      src="assets/images/sidebar-icons/team-manager.svg"
                      className="img-fluid me-3"
                      width={30}
                    />
                    <span>Team Manager</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* <div className="nav-caption fw-600 font-xssss text-grey-500">
              <span>Personal </span>
            </div>
            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl  pt-3 pb-1 mb-2 mt-2">
              <ul className="mb-1 top-content">
                <li className="logo d-none d-xl-block d-lg-block"></li>

                <li>
                  <Link
                    to="/userpagenew"
                    className="nav-content-bttn open-font"
                    onClick={this.handleQueryString}
                  >
                    <Image
                      src="assets/images/sidebar-icons/profile.svg"
                      className="img-fluid me-3"
                      width={30}
                    />
                    <span>My Profile</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/defaultbadge"
                    className="nav-content-bttn open-font"
                  >
                    <Image
                      src="assets/images/sidebar-icons/messages.svg"
                      className="img-fluid me-3"
                      width={30}
                    />
                    <span>Chat</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/defaultstorie"
                    className="nav-content-bttn open-font"
                  >
                    <Image
                      src="assets/images/sidebar-icons/notification.svg"
                      className="img-fluid me-3"
                      width={30}
                    />
                    <span>Notifications</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/defaultgroup"
                    className="nav-content-bttn open-font"
                  >
                    <Image
                      src="assets/images/sidebar-icons/friends.svg"
                      className="img-fluid me-3"
                      width={30}
                    />
                    <span>Friends</span>
                  </Link>
                </li>
              </ul>
            </div> */}
            {/* Personal End */}

            {/* Tennis Apps */}

            {/* Tennis Apps End */}

            {/* Shopping */}

            <div className="nav-caption fw-600 font-xs text-black-400 ps-0 mt-3">
              <span className="text-black">Shopping </span>
            </div>
            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl  pb-1 mb-2 mt-2">
              <ul className="mb-1 top-content">
                <li className="logo d-none d-xl-block d-lg-block"></li>

                <li>
                  <Link
                    to="/userpagenew"
                    className="nav-content-bttn open-font"
                    onClick={this.handleQueryString}
                  >
                    <Image
                      src="assets/images/sidebar-icons/shop.svg"
                      className="img-fluid me-3"
                      width={30}
                    />
                    <span>Shop</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/defaultbadge"
                    className="nav-content-bttn open-font"
                  >
                    <Image
                      src="assets/images/sidebar-icons/marketplace.svg"
                      className="img-fluid me-3"
                      width={30}
                    />
                    <span>Marketplace</span>
                  </Link>
                </li>
                <li>
                  <Link to="/userpage" className="nav-content-bttn open-font">
                    <Image
                      src="assets/images/sidebar-icons/courses.svg"
                      className="img-fluid me-3"
                      width={30}
                    />
                    <span>Courses</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Shopping end */}

            {/* Social */}

            {/* Social end */}

            {/* Community */}

            {/* Community end */}

            <div className="nav-caption fw-600 font-xs text-black-400 ps-0 mt-3">
              <span className="text-black">Settings </span>
            </div>

            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl  pb-1">
              <ul className="mb-1 top-content">
                <li className="logo d-none d-xl-block d-lg-block"></li>
                <li>
                  <Link
                    to="/defaultsettings"
                    className="nav-content-bttn open-font h-auto pt-2 pb-2"
                  >
                    <Image
                      src="assets/images/sidebar-icons/setting.svg"
                      className="img-fluid me-3"
                      width={30}
                    />
                    <span>Settings</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Leftnav;
