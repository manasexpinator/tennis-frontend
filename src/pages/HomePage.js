import React from "react";
import BracketSec from "../components/Homepage/BracketSec";
import FeatureSec from "../components/Homepage/FeatureSec";
import FooterSec from "../components/Homepage/FooterSec";
import HeadNew from "../components/Homepage/HeadNew";
import JoinSec from "../components/Homepage/JoinSec";
import MainBanner from "../components/Homepage/MainBanner";
import ManageSec from "../components/Homepage/ManageSec";

const Homepage = () => {
  return (
    <>
      <HeadNew />
      <MainBanner />
      <FeatureSec />
      <BracketSec />
      <ManageSec />
      <JoinSec />
      <FooterSec />
    </>
  );
};

export default Homepage;
