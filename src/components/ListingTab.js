import React from "react";
import ListingPageTitle from "../components/ListingPageTitle";
import ListGrid from "../components/ListGrid";

const ListingTab = () => {
  return (
    <div>
      <ListingPageTitle />
      <div class="d-flex">
        <button class="fs-6 rounded border text-black py-1 px-2 bg-white">
          My events
        </button>
        <button class="fs-6 rounded border-0 text-black px-2 py-1 ms-5">
          All events
        </button>

        <button class="fs-6 rounded border-0 text-black fw-bold px-2 py-1 ms-5 ms-auto">
          Add events
        </button>
      </div>
      <ListGrid />
    </div>
  );
};

export default ListingTab;
