import React from "react";
import ClubPageTitle from "../components/ClubPageTitle";
import ClubTabGrid from "../components/ClubTabGrid";

export default function ClubTab() {
  return (
    <div>
      <ClubPageTitle />
      <div class="d-flex">
        <button class="fs-6 rounded border text-black py-1 px-2 bg-white">
          My Tennis Clubs
        </button>
        <button class="fs-6 rounded border-0 text-black px-2 py-1 ms-5">
          All Tennis Clubs
        </button>
      </div>
      <ClubTabGrid />
    </div>
  );
}
