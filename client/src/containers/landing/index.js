import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

function Landing() {
  return (
    <main style={{ padding: "1rem 0" }}>
      {/* <Link to="/signin">
        <Button type="primary" style={{ paddign: "5px" }}>
          Button
        </Button>
      </Link> */}
      <Button type="primary" style={{ paddign: "5px" }}>
        Button
      </Button>
    </main>
  );
}

export default Landing;
