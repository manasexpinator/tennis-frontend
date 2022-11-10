import React, { Component, Fragment } from "react";
import ProfiledetailNew from "./ProfiledetailNew";
import Profilephoto from "./Profilephoto";
import Events from "./Events";
import Createpost from "./Createpost";
import Postview from "./Postview";
import Load from "./Load";

class AboutTab extends Component {
  render() {
    return (
      <Fragment>
        <div className="row mt-2">
          <div className="col-xl-4 col-xxl-3 col-lg-4 pe-0">
            <ProfiledetailNew />
            <Profilephoto />
            <Events />
          </div>
          <div className="col-xl-8 col-xxl-9 col-lg-8">
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
            <Load />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AboutTab;
