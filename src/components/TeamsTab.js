import React from "react";
import TeamPageTitle from "../components/TeamPageTitle";
import TeamTabGrid from "../components/TeamTabGrid";

const TeamsTab = () => {
  return (
    <div>
      <TeamPageTitle />
      <div className="row ps-3 pe-3 justify-content-center">
        <TeamTabGrid />
      </div>
    </div>
  );
};

export default TeamsTab;
