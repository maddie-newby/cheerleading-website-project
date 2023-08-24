import React from "react";

export default function CompetitionsItem(props) {
  return (
    <tbody className="table-group-divider">
      {props.competitionsData.map(function (competitionsItem, index) {
        return (
          <tr key={index} className="competitionsItem">
            <th scope="row">{competitionsItem.event_provider}</th>
            <td>{competitionsItem.competition_name}</td>
            <td>{competitionsItem.date}</td>
            <td>{competitionsItem.location}</td>
            <td className="text-center">
              {competitionsItem.sprung_floor ? (
                <i className="fa-solid fa-check"></i>
              ) : (
                ""
              )}
            </td>
            <td className="text-center">
              {competitionsItem.prep_divions === "n/a" ? (
                "n/a"
              ) : competitionsItem.prep_divions ? (
                <i className="fa-solid fa-check"></i>
              ) : (
                ""
              )}
            </td>
            <td className="text-center">
              {competitionsItem.asw_bids ? (
                <i className="fa-solid fa-check"></i>
              ) : (
                ""
              )}
            </td>
            <td className="text-center">
              {competitionsItem.summit_bids && (
                <i className="fa-solid fa-check"></i>
              )}
              {competitionsItem.summit_bids_year &&
                ` (${competitionsItem.summit_bids_year})`}
            </td>
            <td className="text-center">
              {competitionsItem.worlds_bids && (
                <i className="fa-solid fa-check"></i>
              )}
              {competitionsItem.worlds_bids_year &&
                ` (${competitionsItem.worlds_bids_year})`}
            </td>
            <td>
              <a
                href={competitionsItem.competition_webpage.link}
                target="_blank"
                rel="noreferrer noonpener"
              >
                {competitionsItem.competition_webpage.name}
              </a>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
