import React from "react";

export default function CheerWorldsItem(props) {
  return (
    <tbody className="table-group-divider">
      {props.worldsTeams.map(function (worldsTeamsItem, index) {
        return (
          <tr key={index} className="competitionsItem">
            <th scope="row">{worldsTeamsItem.gym_name}</th>
            <th>{worldsTeamsItem.team_name}</th>
            <td>{worldsTeamsItem.division}</td>
            <td>{worldsTeamsItem.current_bid}</td>
            <td>{worldsTeamsItem.bid_provider}</td>
            <td>
              {worldsTeamsItem.team_instagram ? (
                <a
                  href={worldsTeamsItem.team_instagram}
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  {worldsTeamsItem.team_name}'s Instagram
                </a>
              ) : (
                "n/a"
              )}
            </td>
            <td>
              <a
                href={worldsTeamsItem.gym_instagram}
                target="_blank"
                rel="noreferrer noonpener"
              >
                {worldsTeamsItem.gym_name}'s Instagram
              </a>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
