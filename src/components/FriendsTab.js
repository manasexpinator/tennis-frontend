import React, { Component, Fragment } from "react";
import FriendsPageTitle from "./FriendsPageTitle";
import FriendsTabGrid from "./FriendTabGrid";
import FriendsTabReq from "./FriendTabReq";

class FriendsTab extends Component {
  constructor() {
    super();
    this.state = { requests: 1 };
  }
  showRequests = (id) => {
    this.setState({ requests: id });
    console.log("first", this.state.requests);
  };
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-xl-12">
            <FriendsPageTitle
              active={this.state.requests}
              showRequests={this.showRequests}
            />

            <div className="row ps-2 pe-2">
              {this.state.requests == 2 ? (
                <FriendsTabReq />
              ) : (
                <FriendsTabGrid />
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default FriendsTab;
