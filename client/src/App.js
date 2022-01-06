import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "component/footer";

function App() {
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
}

export default App;
