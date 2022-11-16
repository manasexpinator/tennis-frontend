import React, { Component, Fragment } from "react";
// import Header from '../components/Header';
import Leftnav from "../components/Leftnav";
import Rightchat from "../components/Rightchat";
import Appfooter from "../components/Appfooter";
import Popupchat from "../components/Popupchat";
import ProfilecardThreeNew from "../components/ProfilecardThreeNew";
import HeaderNew from "../components/HeaderNew";
import FriendsTab from "../components/FriendsTab";
import AboutTab from "../components/AboutTab";
import PhotosTab from "../components/PhotosTab";
import GroupTab from "../components/GroupTab";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import FourmTab from "../components/FourmTab";
import CoursesTab from "../components/CoursesTab";
import DocumentTab from "../components/DocumentTab";
import MatchesTab from "../components/Matches";
import TeamsTab from "../components/TeamsTab";
import MediaTab from "../components/MediaTab";
import ListingTab from "../components/ListingTab";
import FundraiserTab from "../components/FundraiserTab";
import JobTab from "../components/JobTab";
import CoachTab from "../components/CoachTab";
import ClubTab from "../components/ClubTab";
import StatsTab from "../components/StatsTab";
import TournamentTab from "../components/TournamentTab";
import LeaderBoardTab from "../components/LeaderBoardTab";
import NewMatchTab from "../components/NewMatchTab";

class Userpage extends Component {
  constructor() {
    super();
    this.state = { tabes: 1 };
  }
  showTebs = (id) => {
    this.setState({ tabes: id });
  };
  render() {
    return (
      <Fragment>
        <HeaderNew />

        {window.location.pathname === "/shopnew" ? null : (
          <>
            <Leftnav />
            <Rightchat />
          </>
        )}
        <div className="main-content right-chat-active">
          <div className="middle-sidebar-bottom">
            <div className="middle-sidebar-left pe-0">
              <div className="row mt-5">
                <div className="col-xl-12 mb-3">
                  <ProfilecardThreeNew
                    active={this.state.tabes}
                    tabes={this.showTebs}
                  />
                </div>
              </div>
              {/* {this.state.tabes == 1 ? (
                <AboutTab />
              ) : this.state.tabes == 2 ? (
                <FriendsTab />
              ) : this.state.tabes == 3 ? (
                <PhotosTab />
              ) : this.state.tabes == 4 ? null : this.state.tabes == 5 ? (
                <GroupTab />
              ) : this.state.tabes == 6 ? (
                <FourmTab />
              ) : this.state.tabes == 7 ? (
                <CoursesTab />
              ) : this.state.tabes == 11 ? (
                <DocumentTab />
              ) : null} */}
              {this.state.tabes == 1 ? (
                <AboutTab />
              ) : this.state.tabes == 2 ? (
                <FriendsTab />
              ) : this.state.tabes == 3 ? (
                <MatchesTab />
              ) : this.state.tabes == 4 ? (
                <TeamsTab />
              ) : this.state.tabes == 5 ? (
                <GroupTab />
              ) : this.state.tabes == 6 ? (
                <FourmTab />
              ) : this.state.tabes == 7 ? (
                <CoursesTab />
              ) : this.state.tabes == 8 ? (
                <MediaTab />
              ) : this.state.tabes == 9 ? (
                <ListingTab />
              ) : this.state.tabes == 10 ? (
                <FundraiserTab />
              ) : this.state.tabes == 11 ? (
                <DocumentTab />
              ) : this.state.tabes == 12 ? (
                <JobTab />
              ) : this.state.tabes == 14 ? (
                <ClubTab />
              ) : this.state.tabes == 15 ? (
                <NewMatchTab />
              ) : null}
              {/* <FriendsTab /> */}
              {/* <PhotosTab /> */}
              {/* <GroupTab /> */}
            </div>
          </div>
        </div>

        <Popupchat />
        <Appfooter />
      </Fragment>
    );
  }
}

export default Userpage;
