import React from "react";
import SponserPageTitle from "../components/SponserPageTitle";
import SponserTabGrid from "../components/SponserTabGrid";

const SponserTab = () => {
  return (
    <div>
      <SponserPageTitle />
      <div class="d-flex">
        <button class="fs-6 rounded border text-black py-1 px-2 bg-white">
          My Sponsors
        </button>
        <button class="fs-6 rounded border-0 text-black px-2 py-1 ms-5">
          All Sponsors
        </button>
        <button class="fs-6 rounded border-0 text-black fw-bold px-2 py-1 ms-5 ms-auto">
          Add Sponsor
        </button>
      </div>
      <SponserTabGrid />
    </div>
  );
};

export default SponserTab;
