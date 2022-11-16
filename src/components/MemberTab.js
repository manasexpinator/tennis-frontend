import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Sonnet from "./Sonnet";

function ControlledTabsExample() {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 member-tabs border-0 mt-3"
    >
      <Tab eventKey="home" title="active">
        <Sonnet />
      </Tab>
      <Tab eventKey="profile" title="popular">
        <Sonnet />
      </Tab>
      <Tab eventKey="contact" title="newest">
        <Sonnet />
      </Tab>
    </Tabs>
  );
}

export default ControlledTabsExample;
