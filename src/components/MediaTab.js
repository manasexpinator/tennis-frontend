import React from "react";
import MediaPageTitle from "../components/MediaPageTitle";
import MediaTabGrid from "../components/MediaTabGrid";

const MediaTab = () => {
  return (
    <div>
      <MediaPageTitle />
      <div class="d-flex">
        <button class="fs-6 rounded border text-black py-1 px-2 bg-white">
          Photos
        </button>
        <button class="fs-6 rounded border-0 text-black px-2 py-1 ms-5">
          Videos
        </button>
        <button class="fs-6 rounded border-0 text-black px-2 py-1 ms-5">
          Documents
        </button>
      </div>
      <MediaTabGrid />
    </div>
  );
};

export default MediaTab;
