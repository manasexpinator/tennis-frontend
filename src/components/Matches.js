import React from "react";
import MatchPageTitle from "../components/MatchPageTitle";
import MatchTabGrid from "../components/MatchTabGrid";

const Matches = () => {
  return (
    <div>
      <MatchPageTitle />
      <div class="d-flex">
        <button class="fs-6 rounded border text-black py-1 px-2 bg-white">
          My Matches
        </button>
        <button class="fs-6 rounded border-0 text-black px-2 py-1 ms-5">
          My Stats
        </button>
        <button class="fs-6 rounded border-0 text-black px-2 py-1 ms-5">
          My Tournament
        </button>

        <button class="fs-6 rounded border-0 text-black px-2 py-1 ms-5">
          My Leaderboard
        </button>

        <button class="fs-6 rounded border-0 text-black px-2 py-1 ms-5">
          New Match
        </button>
      </div>
      <MatchTabGrid />
    </div>
  );
};

export default Matches;
