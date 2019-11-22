import React from "react";
import { Link } from "@reach/router";

function Menu(props) {
  const { user, handleChange} = props;
  return (
    <>
      <nav className="App-hompage">
        <Link to="/">
          {" "}
          <button className="homebutton">
            {" "}
            HOME
            <span></span>
            <span></span>
            <span></span>
            <span></span>{" "}
          </button>
        </Link>
        <Link to="/topics">
          {" "}
          <button className="homebutton">
            {" "}
            TOPICS <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </Link>
        <Link to="/articles/all">
          {" "}
          <button className="homebutton">
            {" "}
            ARTICLES <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </Link>
      </nav>
      <br></br>
      <div className="Userselecter">
        <label>
          Change user:{" "}
          <select value={user} onChange={handleChange}>
            <option value="jessjelly">jessjelly</option>
            <option value="tickle122">tickle122</option>
            <option value="cooljmessy">cooljmessy</option>
            <option value="happyamy2016">happyamy2016</option>
            <option value="grumpy19">grumpy19</option>
            <option value="weegembump">weegembump</option>
          </select>
        </label>
      </div>
    </>
  );
}

export default Menu;
