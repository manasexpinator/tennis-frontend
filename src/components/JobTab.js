import React from "react";
import JobPageTitle from "../components/JobPageTitle";
import JobTabGrid from "../components/JobTabGrid";

const JobTab = () => {
  return (
    <div>
      <JobPageTitle />
      <div class="d-flex">
        <button class="fs-6 rounded border text-black py-1 px-2 bg-white">
          My Jobs
        </button>
        <button class="fs-6 rounded border-0 text-black px-2 py-1 ms-5">
          All Jobs
        </button>
        <button class="fs-6 rounded border-0 text-black fw-bold px-2 py-1 ms-5 ms-auto">
          Add Job
        </button>
      </div>
      <JobTabGrid />
      <p className="fw-bold text-black mt-3">
        If no Jobs " You dont have any Jobs yet. Click here to create a new Job"
      </p>
    </div>
  );
};

export default JobTab;
