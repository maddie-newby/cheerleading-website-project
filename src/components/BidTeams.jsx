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
          <a href="#home" className="nav-link active" data-bs-toggle="tab">
            Cheerleading Worlds
          </a>
        </li>
        <li className="nav-item">
          <a href="#profile" className="nav-link" data-bs-toggle="tab">
            Summit (cheer)
          </a>
        </li>
        <li className="nav-item">
          <a href="#messages" className="nav-link" data-bs-toggle="tab">
            Allstar Worlds (cheer)
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="home">
          <CheerWorlds />
        </div>
        <div className="tab-pane fade" id="profile">
          <CheerSummit />
        </div>
        <div className="tab-pane fade" id="messages">
          <p>Messages tab content ...</p>
        </div>
      </div>
    </div>
  );
};

export default BidTeams;
