import React, { Component, Fragment } from "react";

// import Header from "../components/Header";
import Leftnav from "../components/Leftnav";
import Rightchat from "../components/Rightchat";
import Appfooter from "../components/Appfooter";
import Popupchat from "../components/Popupchat";
import Friends from "../components/Friends";
import Contacts from "../components/Contacts";
import Group from "../components/Group";
import Events from "../components/Events";
import Createpost from "../components/Createpost";
import Memberslider from "../components/Memberslider";
import Friendsilder from "../components/Friendsilder";
import Storyslider from "../components/Storyslider";
import Postview from "../components/Postview";
import Load from "../components/Load";
import Profilephoto from "../components/Profilephoto";
import HeaderNew from "../components/HeaderNew";
import Suggested from "../components/suggested";
import Suggestprogress from "../components/suggestprogress";
import Shop from "../components/Shop";
import { Link } from "react-router-dom";
import Job from "../components/Job";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <HeaderNew />
        <Leftnav />
        <Rightchat />

        <div className="main-content right-chat-active">
          <div className="middle-sidebar-bottom">
            <div className="middle-sidebar-left">
              <div className="row feed-body">
                <div className="col-xl-8 col-xxl-9 col-lg-8">
                  <div className="upr-part d-flex align-items-center mb-2 home-reel">
                    <div>
                      <h5 className="mb-0 text-black font-bold fs-4 fw-bold">
                        Reels
                      </h5>
                    </div>
                    <div className="ms-auto">
                      <Link
                        className="fs-5 fw-bold text-primary text-capitalize"
                        to="#"
                      >
                        see all
                      </Link>
                    </div>
                  </div>

                  <Storyslider />
                  <Createpost />
                  <Postview
                    id="32"
                    postvideo=""
                    postimage="post.png"
                    avater="user.png"
                    user="Surfiya Zakir"
                    time="22 min ago"
                    des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus."
                  />
                  <Postview
                    id="31"
                    postvideo=""
                    postimage="post.png"
                    avater="user.png"
                    user="David Goria"
                    time="22 min ago"
                    des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus."
                  />
                  <Postview
                    id="33"
                    postvideo=""
                    postimage="post.png"
                    avater="user.png"
                    user="Anthony Daugloi"
                    time="2 hour ago"
                    des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus."
                  />
                  <Memberslider />
                  <Postview
                    id="35"
                    postvideo=""
                    postimage="post.png"
                    avater="user.png"
                    user="Victor Exrixon"
                    time="3 hour ago"
                    des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus."
                  />
                  <Suggested />
                  <Suggestprogress />
                  <Friendsilder />
                  {/* <Postview
                    id="36"
                    postvideo=""
                    postimage="post.png"
                    avater="user.png"
                    user="Victor Exrixon"
                    time="12 hour ago"
                    des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus."
                  /> */}
                  <Shop />
                  <div className="mt-4">
                    <Storyslider />
                  </div>
                  <div className="mt-5">
                    <Memberslider />
                  </div>
                  <Job />
                  <div className="mt-5">
                    <Shop />
                  </div>
                  <Load />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 ps-lg-0">
                  <Friends />
                  <Contacts />
                  <Group />
                  <Events />
                  <Profilephoto />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Popupchat />
        <Appfooter />
      </Fragment>
    );
  }
}

export default Home;
