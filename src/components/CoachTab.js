import React from "react";
import CoachPageTitle from "../components/CoachPageTitle";
import CoachTabGrid from "../components/CoachTabGrid";

export default function CoachTab() {
  return (
    <div>
      <CoachPageTitle />
      <div class="d-flex">
        <button class="fs-6 rounded border text-black py-1 px-2 bg-white">
          My Tennis Coach
        </button>
        <button class="fs-6 rounded border-0 text-black px-2 py-1 ms-5">
          All Tennis Coaches
        </button>
        <button class="fs-6 rounded border-0 text-black px-2 py-1 ms-auto">
          Add Tennis Coach
        </button>
      </div>
      <CoachTabGrid />
      <p className="fw-bold text-black mt-3">
        users can add a listing for their tennis coaching business.
      </p>
    </div>
  );
}
