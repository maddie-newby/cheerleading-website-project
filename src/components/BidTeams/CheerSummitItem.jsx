import React from "react";

export default function CheerSummitItem(props) {
  return (
    <tbody className="table-group-divider">
      {props.summitTeams.map(function (summitTeamsItem, index) {
        return (
          <tr key={index} className="competitionsItem">
            <th scope="row">{summitTeamsItem.gym_name}</th>
            <th>{summitTeamsItem.team_name}</th>
            <td>{summitTeamsItem.division}</td>
            <td>{summitTeamsItem.current_bid}</td>
            <td>{summitTeamsItem.bid_provider}</td>
            <td>
              {summitTeamsItem.team_instagram ? (
                <a
                  href={summitTeamsItem.team_instagram}
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  {summitTeamsItem.team_name}'s Instagram
                </a>
              ) : (
                "n/a"
              )}
            </td>
            <td>
              <a
                href={summitTeamsItem.gym_instagram}
                target="_blank"
                rel="noreferrer noonpener"
              >
                {summitTeamsItem.gym_name}'s Instagram
              </a>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
