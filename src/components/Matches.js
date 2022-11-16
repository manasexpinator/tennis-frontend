import React from "react";
import MatchPageTitle from "../components/MatchPageTitle";
import MatchTabGrid from "../components/MatchTabGrid";
import LeaderBoardTab from "./LeaderBoardTab";
import NewMatchTab from "./NewMatchTab";
import StatsTab from "./StatsTab";
import TournamentTab from "./TournamentTab";

const Matches = (props) => {
  return (
    <div>
      <MatchPageTitle />
      <div class="d-flex mb-3">
        <button
          onClick={() => props.showdrop(1)}
          class="fs-6 rounded border text-black py-1 px-2 bg-white "
        >
          My Matches
        </button>
        <button
          onClick={() => props.showdrop(2)}
          class="fs-6 rounded border-0 text-black px-2 py-1 ms-5"
        >
          My Stats
        </button>
        <button
          onClick={() => props.showdrop(3)}
          class="fs-6 rounded border-0 text-black px-2 py-1 ms-5"
        >
          My Tournament
        </button>

        <button
          onClick={() => props.showdrop(4)}
          class="fs-6 rounded border-0 text-black px-2 py-1 ms-5"
        >
          My Leaderboard
        </button>

        <button
          onClick={() => props.showdrop(5)}
          class="fs-6 rounded border-0 text-black px-2 py-1 ms-5"
        >
          New Match
        </button>
      </div>

      {props.drop == 1 ? (
        <MatchTabGrid />
      ) : props.drop == 2 ? (
        <StatsTab />
      ) : props.drop == 3 ? (
        <TournamentTab />
      ) : props.drop == 4 ? (
        <LeaderBoardTab />
      ) : props.drop == 5 ? (
        <NewMatchTab />
      ) : null}
    </div>
  );
};

export default Matches;
