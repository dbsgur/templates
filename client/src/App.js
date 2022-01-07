import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "component/footer";

function App() {
  const [logState, setLogState] = useState();

  useEffect(() => {
    setLogState(sessionStorage.getItem("email"));
    console.log("logstate", logState);
  });
  return <div>{logState === null ? outLog() : onLog()}</div>;
}

const outLog = () => {
  return (
    <div>
      <h1>Templates</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/landing">Landing</Link> | <Link to="/signin">Signin</Link> |{" "}
        <Link to="/signup">Signup</Link>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

const onLog = () => {
  const clearStorage = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <h1>Templates</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/landing">Landing</Link> | <Link to="/signin">Signin</Link> |{" "}
        <Link to="/signup">Signup</Link>
        <button onClick={clearStorage}>로그아웃</button>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
