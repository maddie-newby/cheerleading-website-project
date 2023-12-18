import React from "react";

export default function CheerYouthSummitItem(props) {
  return (
    <tbody className="table-group-divider">
      {props.youthSummitTeams.map(function (youthSummitTeamsItem, index) {
        return (
          <tr key={index} className="competitionsItem">
            <th scope="row">{youthSummitTeamsItem.gym_name}</th>
            <th>{youthSummitTeamsItem.team_name}</th>
            <td>{youthSummitTeamsItem.division}</td>
            <td>{youthSummitTeamsItem.current_bid}</td>
            <td>{youthSummitTeamsItem.bid_provider}</td>
            <td>
              {youthSummitTeamsItem.team_instagram ? (
                <a
                  href={youthSummitTeamsItem.team_instagram}
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  {youthSummitTeamsItem.team_name}'s Instagram
                </a>
              ) : (
                "n/a"
              )}
            </td>
            <td>
              <a
                href={youthSummitTeamsItem.gym_instagram}
                target="_blank"
                rel="noreferrer noonpener"
              >
                {youthSummitTeamsItem.gym_name}'s Instagram
              </a>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
