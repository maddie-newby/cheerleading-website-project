import React from "react";
import "./BidTeams.css";
import CheerWorlds from "./BidTeams/CheerWorlds";
import CheerSummit from "./BidTeams/CheerSummit";

const BidTeams = () => {
  return (
    <div className="bidTeams">
      <header>Bid teams</header>
      <h3 className="mb-5">
        Here is the list of UK teams that are competiting in international
        competitions during the competition year 2023-2024:
      </h3>
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <a
            href="#cheerleading-worlds"
            className="nav-link active"
            data-bs-toggle="tab"
          >
            Cheerleading Worlds
          </a>
        </li>
        <li className="nav-item">
          <a href="#summit-cheer" className="nav-link" data-bs-toggle="tab">
            Summit (cheer)
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#allstar-worlds-cheer"
            className="nav-link"
            data-bs-toggle="tab"
          >
            Allstar Worlds (cheer)
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="cheerleading-worlds">
          <CheerWorlds />
        </div>
        <div className="tab-pane fade" id="summit-cheer">
          <CheerSummit />
        </div>
        <div className="tab-pane fade" id="allstar-worlds-cheer">
          <p>Messages tab content ...</p>
        </div>
      </div>
    </div>
  );
};

export default BidTeams;
