import React from "react";
import { Col, Row } from "react-bootstrap";
import FundraiserPageTitle from "../components/FundraiserPageTitle";
import FundraiserTabGrid from "../components/FundraiserTabGrid";

const FundraiserTab = () => {
  return (
    <div>
      <FundraiserPageTitle />
      <div class="d-flex">
        <button class="fs-6 rounded border text-black py-1 px-2 bg-white">
          My Fundraisers
        </button>
        <button class="fs-6 rounded border-0 text-black px-2 py-1 ms-5">
          All Fundraisers
        </button>
        <button class="fs-6 rounded border-0 text-black fw-bold px-2 py-1 ms-5 ms-auto">
          Add Fundraiser
        </button>
      </div>
      <FundraiserTabGrid />
      <p className="fw-bold text-black">
        If no Fundraisers " You dont have any Fundraisers yet. Click here to
        create a new fundraiser"
      </p>
    </div>
  );
};

export default FundraiserTab;
