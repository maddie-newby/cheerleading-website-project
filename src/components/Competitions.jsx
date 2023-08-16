import React from "react";
import "./Competitions.css";
import CompetitionsItem from "./CompetitionsItem";
import data from "./CompetitionsTable.json";

const Competitions = () => {
  return (
    <div className="competitions">
      <header>Competitions</header>
      <p>
        Here is the list of UK competitions for the competition year 2023-2024:
      </p>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                Event provider
              </th>
              <th scope="col" className="col-1">
                Competition name
              </th>
              <th scope="col" className="col-1">
                Date
              </th>
              <th scope="col" className="col-2">
                Location
              </th>
              <th scope="col" className="col-1 text-center">
                Sprung floor
              </th>
              <th scope="col" className="col-1 text-center">
                Prep divisions
              </th>
              <th scope="col" className="col-1 text-center">
                ASW bids
              </th>
              <th scope="col" className="col-1 text-center">
                Summit bids
              </th>
              <th scope="col" className="col-1 text-center">
                IASF/USASF Worlds bids
              </th>
              <th scope="col" className="col-2">
                Competition webpage
              </th>
            </tr>
          </thead>
          <CompetitionsItem competitionsData={data} />
        </table>
      </div>
    </div>
  );
};

export default Competitions;
