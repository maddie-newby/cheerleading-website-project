import React from "react";
import data from "./CheerSummit.json";
import CheerSummitItem from "./CheerSummitItem";

const CheerSummit = () => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col" className="table-header">
              Gym Name
            </th>
            <th scope="col" className="table-header">
              Team name
            </th>
            <th scope="col" className="table-header">
              Division
            </th>
            <th scope="col" className="table-header">
              Type of bid
            </th>
            <th scope="col" className="table-header">
              Bid provider
            </th>
            <th scope="col" className="table-header">
              Team Instagram
            </th>
            <th scope="col" className="table-header">
              Gym Instagram
            </th>
          </tr>
        </thead>
        <CheerSummitItem summitTeams={data} />
      </table>
    </div>
  );
};

export default CheerSummit;
