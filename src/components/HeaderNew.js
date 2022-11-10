import React, { Component } from "react";
import { Image, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Darkbutton from "../components/Darkbutton";

class HeaderNew extends Component {
  state = {
    isOpen: false,
    isActive: false,
    isNoti: false,
    isMenu: false,
    isCheck: false,
  };
  toggleClass = () => {
    this.setState({ isCheck: !this.state.isCheck });
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  toggleActive = () => this.setState({ isActive: !this.state.isActive });
  toggleisNoti = () => this.setState({ isNoti: !this.state.isNoti });
  toggleisMenu = () => this.setState({ isMenu: !this.state.isMenu });

  render() {
    const navClass = `${this.state.isOpen ? " nav-active" : ""}`;
    const buttonClass = `${this.state.isOpen ? " active" : ""}`;
    const searchClass = `${this.state.isActive ? " show" : ""}`;
    const notiClass = `${this.state.isNoti ? " show" : ""}`;
    const shortMenu = `${this.state.isMenu ? " show" : ""}`;
    const isActiveCheck = this.state.isCheck;

    return (
      <div className="nav-header  shadow-xs">
        <div className="nav-top">
          <Link to="/">
            <Image src="assets/images/logonew.svg" className="img-fluid" />
          </Link>
          <Link
            to="/defaultmessage"
            className="mob-menu ms-auto me-2 chat-active-btn"
          >
            <i className="feather-message-circle text-grey-900 font-sm btn-round-md bg-greylight"></i>
          </Link>
          <Link to="/defaultvideo" className="mob-menu me-2">
            <i className="feather-video text-grey-900 font-sm btn-round-md bg-greylight"></i>
          </Link>
          <span
            onClick={this.toggleActive}
            className="me-2 menu-search-icon mob-menu"
          >
            <i className="feather-search text-grey-900 font-sm btn-round-md bg-greylight"></i>
          </span>
          <button
            onClick={this.toggleOpen}
            className={`nav-menu me-0 ms-2 ${buttonClass}`}
          ></button>
        </div>

        <form action="#" className="float-left header-search">
          <div className="form-group mb-0 icon-input">
            <Image src="assets/images/srch.svg" />
          </div>
        </form>
        {/* <NavLink
          activeClassName="active"
          to="/home"
          className="p-2 text-center ms-3 menu-icon center-menu-icon"
        >
          <i className="feather-home font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/defaultstorie"
          className="p-2 text-center ms-0 menu-icon center-menu-icon"
        >
          <i className="feather-zap font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/defaultvideo"
          className="p-2 text-center ms-0 menu-icon center-menu-icon"
        >
          <i className="feather-video font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/defaultvideo"
          className="p-2 text-center ms-0 menu-icon center-menu-icon"
        >
          <i className="feather-layers font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i>
        </NavLink>

        <NavLink
          activeClassName="active"
          to="/defaultvideo"
          className="p-2 text-center ms-0 menu-icon center-menu-icon"
        >
          <i className="feather-award font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i>
        </NavLink>

        <NavLink
          activeClassName="active"
          to="/shop2"
          className="p-2 text-center ms-0 menu-icon center-menu-icon"
        >
          <i className="feather-shopping-bag font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/defaultgroup"
          className="p-2 text-center ms-0 menu-icon center-menu-icon"
        >
          <i className="feather-users font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i>
        </NavLink> */}

        <span
          className={`pointer text-center ms-auto me-3 menu-icon ${notiClass}`}
          id="dropdownMenu3"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={this.toggleisNoti}
        >
          <Image src="assets/images/chat.svg" className="img-fluid w40" />
        </span>
        <div
          className={`dropdown-menu p-4 right-0 rounded-xxl border-0 shadow-lg ${notiClass}`}
          aria-labelledby="dropdownMenu3"
        >
          <h4 className="fw-700 font-xss mb-4">Notification</h4>
          <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
            <img
              src="assets/images/user.png"
              alt="user"
              className="w40 position-absolute left-0"
            />
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
              Hendrix Stamp
              <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                3 min
              </span>
            </h5>
            <h6 className="text-grey-500 fw-500 font-xssss lh-4">
              There are many variations of pass..
            </h6>
          </div>
          <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
            <img
              src="assets/images/user.png"
              alt="user"
              className="w40 position-absolute left-0"
            />
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
              Goria Coast{" "}
              <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                {" "}
                2 min
              </span>
            </h5>
            <h6 className="text-grey-500 fw-500 font-xssss lh-4">
              Mobile Apps UI Designer is require..
            </h6>
          </div>

          <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
            <img
              src="assets/images/user.png"
              alt="user"
              className="w40 position-absolute left-0"
            />
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
              Surfiya Zakir{" "}
              <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                {" "}
                1 min
              </span>
            </h5>
            <h6 className="text-grey-500 fw-500 font-xssss lh-4">
              Mobile Apps UI Designer is require..
            </h6>
          </div>
          <div className="card bg-transparent-card w-100 border-0 ps-5">
            <img
              src="assets/images/user.png"
              alt="user"
              className="w40 position-absolute left-0"
            />
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
              Victor Exrixon
              <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                30 sec
              </span>
            </h5>
            <h6 className="text-grey-500 fw-500 font-xssss lh-4">
              Mobile Apps UI Designer is require..
            </h6>
          </div>
        </div>
        <Link
          to="/defaultmessage"
          className="text-center menu-icon me-3 chat-active-btn"
        >
          <Image src="assets/images/bell.svg" className="img-fluid w40" />
        </Link>

        {/* <Link
          to="/defaultmessage"
          className="p-2 text-center ms-3 menu-icon chat-active-btn"
        >
          <Image src="assets/images/mode.svg" className="img-fluid" />
        </Link> */}
        <Darkbutton />
        <span
          className={`pointer text-center  menu-icon ${shortMenu}`}
          id="dropdownMenu4"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={this.toggleisMenu}
        >
          <img src="assets/images/user.png" alt="user" className="w40" />
        </span>

        <div
          className={`dropdown-menu p-4 right-0 rounded-xxl border-0 shadow-lg ${shortMenu}`}
          aria-labelledby="dropdownMenu4"
        >
          <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
            <img
              src="assets/images/user.png"
              alt="user"
              className="w40 position-absolute left-0"
            />
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
              Hendrix Stamp
            </h5>
            <h6 className="text-grey-500 fw-500 font-xssss lh-4">@ Hendrix</h6>
          </div>
          <div className="card bg-transparent-card w-100 border-0 flex-row mb-3">
            <i className="feather-user font-xss text-secondary-500 me-3"></i>
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
              Profile
            </h5>
          </div>

          <div className="card bg-transparent-card w-100 border-0 flex-row mb-3">
            <i className="feather-user font-xss text-secondary-500 me-3"></i>
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
              Account
            </h5>
          </div>
          <div className="card bg-transparent-card w-100 border-0 flex-row mb-3">
            <i className="feather-activity font-xss text-secondary-500 me-3"></i>
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
              Timeline
            </h5>
          </div>
          <div className="card bg-transparent-card w-100 border-0 flex-row mb-3">
            <i className="feather-bell font-xss text-secondary-500 me-3"></i>
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
              Notification
            </h5>
          </div>
          <div className="card bg-transparent-card w-100 border-0 flex-row mb-3">
            <i className="feather-inbox font-xss text-secondary-500 me-3"></i>
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
              Messages
            </h5>
          </div>
          <div className="card bg-transparent-card w-100 border-0 flex-row mb-3">
            <i className="feather-users font-xss text-secondary-500 me-3"></i>
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
              Connections
            </h5>
          </div>
          <div className="card bg-transparent-card w-100 border-0 flex-row mb-3">
            <i className="feather-users font-xss text-secondary-500 me-3"></i>
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
              Groups
            </h5>
          </div>
          <div className="card bg-transparent-card w-100 border-0 flex-row mb-3">
            <i className="feather-layers font-xss text-secondary-500 me-3"></i>
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
              Courses
            </h5>
          </div>

          <div className="card bg-transparent-card w-100 border-0 flex-row mb-3">
            <i className="feather-file-text font-xss text-secondary-500 me-3"></i>
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
              Forums
            </h5>
          </div>
          <div className="card bg-transparent-card w-100 border-0 flex-row mb-3">
            <i className="feather-user font-xss text-secondary-500 me-3"></i>
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
              Photos
            </h5>
          </div>
          <div className="card bg-transparent-card w-100 border-0 flex-row mb-3">
            <i className="feather-user font-xss text-secondary-500 me-3"></i>
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
              Documents
            </h5>
          </div>
          <div className="card bg-transparent-card w-100 border-0 flex-row mb-3">
            <i className="feather-user font-xss text-secondary-500 me-3"></i>
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
              Videos
            </h5>
          </div>
          <hr />
          <div className="card bg-transparent-card w-100 border-0 flex-row mb-3">
            <i className="feather-user font-xss text-secondary-500 me-3"></i>
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
              Log out
            </h5>
          </div>
        </div>

        {/* Left sidebar */}
        <nav className={`d-lg-none navigation scroll-bar ${navClass}`}>
          <div className="container ps-0 pe-0">
            <div className="nav-content">
              {/* Personal */}
              <div className="nav-wrap bg-white bg-transparent-card rounded-xxl  pt-3 pb-1 mb-2 mt-2">
                <div className="nav-caption fw-600 font-xssss text-grey-500">
                  <span>Personal </span>
                </div>
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
              </div>
              {/* Personal End */}

              {/* Tennis Apps */}

              <div className="nav-wrap bg-white bg-transparent-card rounded-xxl pt-3 pb-1 mb-2 mt-2">
                <div className="nav-caption fw-600 font-xssss text-grey-500">
                  <span>Tennis Apps </span>
                </div>
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

              {/* Tennis Apps End */}

              {/* Shopping */}

              <div className="nav-wrap bg-white bg-transparent-card rounded-xxl pt-3 pb-1 mb-2 mt-2">
                <div className="nav-caption fw-600 font-xssss text-grey-500">
                  <span>Shopping </span>
                </div>
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
              <div className="nav-wrap bg-white bg-transparent-card rounded-xxl pt-3 pb-1 mb-2 mt-2">
                <div className="nav-caption fw-600 font-xssss text-grey-500">
                  <span>Social Media </span>
                </div>
                <ul className="mb-1 top-content">
                  <li className="logo d-none d-xl-block d-lg-block"></li>

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
                      <span>Stories</span>
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
              {/* Social end */}

              {/* Community */}
              <div className="nav-wrap bg-white bg-transparent-card rounded-xxl pt-3 pb-1 mb-2 mt-2">
                <div className="nav-caption fw-600 font-xssss text-grey-500">
                  <span>Community </span>
                </div>
                <ul className="mb-1 top-content">
                  <li className="logo d-none d-xl-block d-lg-block"></li>

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
                    </Button>

                    {isActiveCheck ? (
                      <ul className="mb-1 top-content ps-3">
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
                  <li>
                    <Link
                      to="/defaultbadge"
                      className="nav-content-bttn open-font"
                    >
                      <Image
                        src="assets/images/sidebar-icons/groups.svg"
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
                </ul>
              </div>
              {/* Community end */}

              <div className="nav-wrap bg-white bg-transparent-card rounded-xxl pt-3 pb-1">
                <ul className="mb-1">
                  <li className="logo d-none d-xl-block d-lg-block"></li>
                  <li>
                    <Link
                      to="/defaultsettings"
                      className="nav-content-bttn open-font h-auto pt-2 pb-2"
                    >
                      <i className="font-sm feather-settings me-3 text-grey-500"></i>
                      <span>Settings</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div className={`app-header-search ${searchClass}`}>
          <form className="search-form">
            <div className="form-group searchbox mb-0 border-0 p-1">
              <input
                type="text"
                className="form-control border-0"
                placeholder="Search..."
              />
              <i className="input-icon">
                <ion-icon
                  name="search-outline"
                  role="img"
                  className="md hydrated"
                  aria-label="search outline"
                ></ion-icon>
              </i>
              <span className="ms-1 mt-1 d-inline-block close searchbox-close">
                <i className="ti-close font-xs" onClick={this.toggleActive}></i>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default HeaderNew;
