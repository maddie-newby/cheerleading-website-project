import React from "react";
import "./Competitions.css";

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
          <tbody>
            <tr>
              <th scope="row">Future Cheer</th>
              <td>Jungle Fever</td>
              <td>18th-19th Nov 2023</td>
              <td>Bolton Arena, Bolton</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"> </td>
              <td className="text-center"> </td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://futurecheer.net/live-competitions/jungle-fever/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  FC Jungle Fever webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">SOAR</th>
              <td>Rise - Dance only</td>
              <td>19th Nov 2023</td>
              <td>Lagoon Leisure Centre, Paisley</td>
              <td className="text-center"> </td>
              <td className="text-center">n/a</td>
              <td className="text-center"> </td>
              <td className="text-center"> </td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://soarcheeranddance.co.uk/events/soar-rise-2023/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  SOAR Rise webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Future Cheer</th>
              <td>FC Brings it on</td>
              <td>25th Nov 2023</td>
              <td>Gymnase Guy Kappes, Paris</td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"> </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i> (2024)
              </td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://futurecheer.net/live-competitions/brings-it-on/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  FC Brings it on webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Future Cheer</th>
              <td>Winter Wonderland</td>
              <td>2nd-3rd Dec 2023</td>
              <td>Essex Sports Arena, Colchester</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://futurecheer.net/live-competitions/winter-wonderland/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  FC Winter Wonderland webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">BCA</th>
              <td>Winter Weekender</td>
              <td>9th-10th Dec 2023</td>
              <td>Winter Gardens, Blackpool</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"> </td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://www.cheerleading.org.uk/winter-weekender/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  BCA Winter Weekender webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Cheer City</th>
              <td>Frost Festival</td>
              <td>9th-10th Dec 2023</td>
              <td>University of Warwick Sports and Wellness Hub, Coventry</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://www.cheercity.co.uk/copy-of-frost-festival-22"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  Cheer City Frost Festival webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICE</th>
              <td>Christmas ICE Breaker</td>
              <td>9th-10th Dec 2023</td>
              <td>Fenton Manor Sports Complex, Stoke-on-Trent</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://incrediblycoolevents.co.uk/events/christmas-ice-breaker-2023/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICE Christmas ICE Breaker webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">21CC</th>
              <td>21CC Cheer & Dance Internationals</td>
              <td>16th Dec 2023</td>
              <td>Sport Ireland Campus, Dublin</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"> </td>
              <td className="text-center"> </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i> (2024)
              </td>
              <td>
                <a
                  href="http://www.21centurycheer.com/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  21CC Cheer & Dance Internationals webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Future Cheer</th>
              <td>FC Essentials - South</td>
              <td>20th Jan 2024</td>
              <td>K2 Arena, Crawley</td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://futurecheer.net/fc-essentials/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  FC Essentials - South webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">DC12</th>
              <td>Retro</td>
              <td>20th-21st Jan 2024</td>
              <td>Wolverhampton</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://www.dc12.co.uk/retro"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  DC12 Retro webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">SOAR</th>
              <td>Ascend</td>
              <td>20th-21st Jan 2024</td>
              <td>Ravenscraig Regional Sports Facility, Motherwell</td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://soarcheeranddance.co.uk/events/soar-ascend-2024/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  SOAR Ascend webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">BCA</th>
              <td>Cheer Bid Battle</td>
              <td>27th Jan 2024</td>
              <td>University of Warwick Sports and Wellness Hub, Coventry</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://www.cheerleading.org.uk/cheer-bid-battle/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  BCA Cheer Bid Battle webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">BCA</th>
              <td>Super Classic</td>
              <td>27th-28th Jan 2024</td>
              <td>University of Warwick Sports and Wellness Hub, Coventry</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://www.cheerleading.org.uk/super-classic/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  BCA Super Classic webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICC</th>
              <td>Northern Championships</td>
              <td>27th-28th Jan 2024</td>
              <td>BEC Arena, Manchester</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://w-cheer.net/icc-competitions/northern-championships/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICC Northern Championships webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Cheer City</th>
              <td>Winter Spectacular</td>
              <td>3rd-4th Feb 2024</td>
              <td>University of Warwick Sports and Wellness Hub, Coventry</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://www.cheercity.co.uk/copy-of-frost-festival-23"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  Cheer City Winter Spectacular webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICE</th>
              <td>Spring Thaw Out</td>
              <td>3rd-4th Feb 2024</td>
              <td>LC Swansea, Swansea</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://incrediblycoolevents.co.uk/events/ice-spring-thaw-out-2024/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICE Spring Thaw Out webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICC</th>
              <td>Southern Championships</td>
              <td>3rd-4th Feb 2024</td>
              <td>Guildford Spectrum, Guildford</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://w-cheer.net/icc-competitions/southern-championships/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICC Southern Championships webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">DC12</th>
              <td>Neon</td>
              <td>4th-5th Feb 2024</td>
              <td>Hull</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://www.dc12.co.uk/neonhull"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  DC12 Neon webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Cheer City</th>
              <td>Spring Open</td>
              <td>10th-11th Feb 2024</td>
              <td>University of Warwick Sports and Wellness Hub, Coventry</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://www.cheercity.co.uk/copy-of-winter-spectacular-24"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  Cheer City Spring Open webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICC</th>
              <td>Western</td>
              <td>10th-11th Feb 2024</td>
              <td>Bath & West Showground, Shepton Mallet</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://w-cheer.net/icc-competitions/welsh-open/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICC Western webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Legacy</th>
              <td>Stand Strong</td>
              <td>10th-11th Feb 2024</td>
              <td>Sport Central Northumbria University, Newcastle</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://www.legacycheeranddance.com/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  Legacy Cheer and Dance website
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">BCA</th>
              <td>Scottish Sensation</td>
              <td>10th-12th Feb 2024</td>
              <td>Scottish Event Campus, Glasgow</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://www.cheerleading.org.uk/scottish-sensation/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  BCA Scottish Sensation webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Future Cheer</th>
              <td>Heart of England</td>
              <td>17th Feb 2024</td>
              <td>Manchester Central, Manchester</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://futurecheer.net/live-competitions/heart-of-england/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  FC Heart of England webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICE</th>
              <td>Frost Fest</td>
              <td>17th-18th Feb 2024</td>
              <td>Antrim Forum, Northern Ireland</td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://incrediblycoolevents.co.uk/events/ice-frost-fest-2024/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICE Frost Fest webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Legacy</th>
              <td>Just Believe</td>
              <td>17th-18th Feb 2024</td>
              <td>Copper Box Arena, London</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://www.legacycheeranddance.com/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  Legacy Cheer and Dance website
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Future Cheer</th>
              <td>University Nationals</td>
              <td>18th Feb 2024</td>
              <td>Manchester Central, Manchester</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">n/a</td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://futurecheer.net/live-competitions/university-nationals/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  FC University Nationals webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICC</th>
              <td>Southern Pt.2 Championships</td>
              <td>24th Feb 2024</td>
              <td>Guildford Spectrum, Guildford</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://w-cheer.net/icc-competitions/icc-southern-pt-2/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICC Southern Pt.2 Championships webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICE</th>
              <td>UDE Dance Fiesta</td>
              <td>25th Feb 2024</td>
              <td>The Edge, Leeds</td>
              <td className="text-center"></td>
              <td className="text-center">n/a</td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://incrediblycoolevents.co.uk/events/ude-dance-fiesta-2024/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICE UDE Dance Fiesta webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Cheer City</th>
              <td>Allstar Championship</td>
              <td>2nd-3rd Mar 2024</td>
              <td>Loughborough University, Loughborough</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://www.cheercity.co.uk/copy-of-spring-open-24"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  Cheer City Allstar Championship webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Future Cheer</th>
              <td>Circus Spectacular</td>
              <td>2nd-3rd Mar 2024</td>
              <td>English Institue of Sport, Sheffield</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://futurecheer.net/live-competitions/circus-spectacular/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  FC Circus Spectacular webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Jamfest</th>
              <td>Northern Jam</td>
              <td>2nd-3rd Mar 2024</td>
              <td>Blackpool</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i> (2024)
              </td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://www.varsity.com/jf/jamfest-northern-jam/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  Jamfest Northern Jam webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">SOAR</th>
              <td>Reign Supreme</td>
              <td>2nd-3rd Mar 2024</td>
              <td>Meadowbank Sports Centre, Edinburgh</td>
              <td className="text-center"> </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://soarcheeranddance.co.uk/events/reign-supreme-2024/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  SOAR Reign Supreme webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Future Cheer</th>
              <td>FC Essentials - North</td>
              <td>3rd Mar 2024</td>
              <td>English Institute of Sport, Sheffield</td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://futurecheer.net/essentials-north/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  FC Essentials - North webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">BCA</th>
              <td>Cymru Clash</td>
              <td>9th-10th Mar 2024</td>
              <td>ICC Wales, Newport</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://www.cheerleading.org.uk/cymru-clash/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  BCA Cymru Clash webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICE</th>
              <td>Sub Zero</td>
              <td>9th-10th Mar 2024</td>
              <td>Ravenscraig Regional Sports Facility, Motherwell</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://incrediblycoolevents.co.uk/events/ice-sub-zero/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICE Sub Zero webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">BCA</th>
              <td>University Nationals</td>
              <td>16th-17th Mar 2024</td>
              <td>Telford International Centre, Telford</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">n/a</td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://www.cheerleading.org.uk/university-nationals/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  BCA Univerity Nationals webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Future Cheer</th>
              <td>Spotlight Showdown</td>
              <td>16th-17th Mar 2024</td>
              <td>Fenton Manor Sports Complex, Stoke-on-Trent</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://futurecheer.net/spotlight-showdown/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  FC Spotlight Showdown webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICE</th>
              <td>ICE Cooler</td>
              <td>16th-17th Mar 2024</td>
              <td>Fenton Manor Sports Complex, Stoke-on-Trent</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://incrediblycoolevents.co.uk/events/ice-cooler-2024/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICE Cooler webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICC</th>
              <td>British Open & University Nationals</td>
              <td>16th-17th Mar 2024</td>
              <td>Motorpoint Arena, Nottingham</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td>
                <a
                  href="https://w-cheer.net/icc-competitions/british-open/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICC British Open & University Nationals webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">BCA</th>
              <td>Dance Revolution</td>
              <td>17th Mar 2024</td>
              <td>Telford International Centre, Telford</td>
              <td className="text-center"></td>
              <td className="text-center">n/a</td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://incrediblycoolevents.co.uk/events/ice-cooler-2024/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICE Cooler webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">BCA</th>
              <td>Dance Bid Battle</td>
              <td>17th Mar 2024</td>
              <td>Telford International Centre, Telford</td>
              <td className="text-center"></td>
              <td className="text-center">n/a</td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://www.cheerleading.org.uk/dance-bid-battle/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  BCA Dance Bid Battle webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">DC12</th>
              <td>Crusade</td>
              <td>23rd Mar 2024</td>
              <td>Manchester</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://www.dc12.co.uk/crusademanchester"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  DC12 Crusade webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Legacy</th>
              <td>Alpha & Omega</td>
              <td>23rd Mar 2024</td>
              <td>Resorts World Arena, Birmingham</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">n/a </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://www.legacycheeranddance.com/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  Legacy Cheer and Dance website
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Legacy</th>
              <td>Dream Extreme</td>
              <td>23rd-24th Mar 2024</td>
              <td>Resorts World Arena, Birmingham</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://www.legacycheeranddance.com/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  Legacy Cheer and Dance website
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Cheer Festival</th>
              <td>Nationals</td>
              <td>30th-31st Mar 2024</td>
              <td>Dundee</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://www.instagram.com/cheerfestival_events/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  Cheer Festival Instagram page
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">BCA</th>
              <td>Spring Spirit</td>
              <td>6th-7th Apr 2024</td>
              <td>K2 Arena, Crawley</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://www.cheerleading.org.uk/spring-spirit/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  BCA Spring Spirit webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">DC12</th>
              <td>Apex Nationals</td>
              <td>6th-7th Apr 2024</td>
              <td>Cardiff</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://www.dc12.co.uk/competitions"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  DC12 competitions webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Future Cheer</th>
              <td>Adventure in Atlantis</td>
              <td>6th-7th Apr 2024</td>
              <td>NAEC, Stoneleigh</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://futurecheer.net/adventure-in-atlantis/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  FC Adventure in Atlantis webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Future Cheer</th>
              <td>Future Dance - Steel the Show</td>
              <td>13th Apr 2024</td>
              <td>Magna Arena, Rotherham</td>
              <td className="text-center"></td>
              <td className="text-center">n/a</td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://futurecheer.net/steel-the-show/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  FC Future Dance - Steel the Show webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Future Cheer</th>
              <td>Future Dance - Own the Floor</td>
              <td>4th May 2024</td>
              <td>MK Arena, Milton Keynes</td>
              <td className="text-center"></td>
              <td className="text-center">n/a</td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://futurecheer.net/future-dance/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  FC Future Dance - Own the Floor webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Future Cheer</th>
              <td>FC Essentials - Nationals</td>
              <td>5th May 2024</td>
              <td>MK Arena, Milton Keynes</td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://futurecheer.net/essentials-nationals/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  FC Essentials - Nationals webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Future Cheer</th>
              <td>Schools Out</td>
              <td>5th May 2024</td>
              <td>MK Arena, Milton Keynes</td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://futurecheer.net/live-competitions/schools-out/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  FC Schools Out webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Future Cheer</th>
              <td>FC Amsterdam</td>
              <td>11th May 2024</td>
              <td>Sporthallen Zuid, Amsterdam</td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://futurecheer.net/fc-amsterdam/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  FC Amsterdam webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Cheer City</th>
              <td>Summer Showdown</td>
              <td>11th-12th May 2024</td>
              <td>University of Warwick Sports and Wellness Hub, Coventry</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://www.cheercity.co.uk/copy-of-allstars-championship-24"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  Cheer City Summer Showdown webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Cheer Festival</th>
              <td>Regionals</td>
              <td>11th-12th May 2024</td>
              <td>Inverness</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://www.instagram.com/cheerfestival_events/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  Cheer Festival Instagram webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICE</th>
              <td>ICE Blast</td>
              <td>11th-12th May 2024</td>
              <td>K2 Leisure Centre, Crawley</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://incrediblycoolevents.co.uk/events/ice-blast-2024/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICE Blast webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Cheer City</th>
              <td>Summer Games</td>
              <td>18th-19th May 2024</td>
              <td>K2 Leisure Centre, Crawley</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://www.cheercity.co.uk/copy-of-summer-showdown-24"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  Cheer City Summer Games webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICE</th>
              <td>Summer Meltdown</td>
              <td>18th-19th May 2024</td>
              <td>Doncaster Dome, Doncaster</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://incrediblycoolevents.co.uk/events/ice-summer-meltdown-2024/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICE Summer Meltdown webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Future Cheer</th>
              <td>Superhero Spirit Challenge</td>
              <td>24th-26th May 2024</td>
              <td>Braehead Arena, Glasgow</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://futurecheer.net/live-competitions/superhero-spirit-challenge/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  FC Superhero Spirit Challenge webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">BCA</th>
              <td>Allstar Nationals</td>
              <td>25th-26th May 2024</td>
              <td>Telford International Centre, Telford</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td>
                <a
                  href="https://www.cheerleading.org.uk/allstar-nationals/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  BCA Allstar Nationals webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICE</th>
              <td>UDE Let's Dance</td>
              <td>26th May 2024</td>
              <td>The Hub, Walsall</td>
              <td className="text-center"></td>
              <td className="text-center">n/a</td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"> </td>
              <td>
                <a
                  href="https://incrediblycoolevents.co.uk/events/ude-lets-dance-2024/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICE UDE Let's Dance webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">BCA</th>
              <td>Summer Showdown</td>
              <td>1st-2nd Jun 2024</td>
              <td>Meadowbank Sports Centre, Edinburgh</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://www.cheerleading.org.uk/allstar-nationals/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  BCA Allstar Nationals webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Cheer City</th>
              <td>Nationals</td>
              <td>1st-2nd Jun 2024</td>
              <td>Loughborough University, Loughborough</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://www.cheercity.co.uk/copy-of-summer-games-24"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  Cheer City Nationals webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICE</th>
              <td>Southern Chill</td>
              <td>1st-2nd Jun 2024</td>
              <td>Worcester University Arena, Worcester</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://incrediblycoolevents.co.uk/events/ice-southern-chill-2024/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICE Southern Chill webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICC</th>
              <td>Southern Jam</td>
              <td>8th Jun 2024</td>
              <td>Sport Central, Glasgow</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://w-cheer.net/icc-competitions/icc-southern-jam/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICC Southern Jam webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">BCA</th>
              <td>Summer Spotlight</td>
              <td>8th-9th Jun 2024</td>
              <td>Guildford Spectrum, Guildford</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://w-cheer.net/icc-competitions/icc-southern-jam/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICC Southern Jam webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICE</th>
              <td>Big Chill</td>
              <td>8th-9th Jun 2024</td>
              <td>Bushfield Leisure Centre, Peterborough</td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://incrediblycoolevents.co.uk/events/ice-big-chill-2024/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICE Big Chill webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Legacy</th>
              <td>Live Your Legacy</td>
              <td>8th-9th Jun 2024</td>
              <td>Resorts World Arena, Birmingham</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td>
                <a
                  href="https://www.legacycheeranddance.com/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  Legacy Cheer and Dance website
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Future Cheer</th>
              <td>FC Barcelona</td>
              <td>15th Jun 2024</td>
              <td>Palau Olimpic Stadium, Barcelona</td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://futurecheer.net/fc-barcelona/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  FC Barcelona webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">SOAR</th>
              <td>Zero Gravity</td>
              <td>15th-16th Jun 2024</td>
              <td>Lagoon Leisure Centre, Paisley</td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://soarcheeranddance.co.uk/events/soar-zero-gravity-2024/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  SOAR Zero Gravity webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Jamfest</th>
              <td>Jamfest Europe</td>
              <td>21st-23rd Jun 2024</td>
              <td>M&S Bank Arena, Liverpool</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td>
                <a
                  href="https://www.varsity.com/jf/jamfest-europe/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  Jamfest Europe webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICC</th>
              <td>Battle of Champions</td>
              <td>22nd Jun 2024</td>
              <td>Motorpoint Arena, Nottingham</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://w-cheer.net/icc-competitions/battle-of-champions/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICC Battle of Champions webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICC</th>
              <td>British Open Pt.2 Speciality Nationals</td>
              <td>23rd Jun 2024</td>
              <td>Motorpoint Arena, Nottingham</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://w-cheer.net/icc-competitions/british-open-speciality-nationals/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICC British Open Pt.2 webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICE</th>
              <td>ICE Championships</td>
              <td>29th-30th Jun 2024</td>
              <td>Fenton Manor Sports Complex, Stoke-on-Trent</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://incrediblycoolevents.co.uk/events/ice-championships-2024/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICE Championships webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Future Cheer</th>
              <td>FC Internationals</td>
              <td>5th-7th Jul 2024</td>
              <td>Bournemouth International Centre, Bournemouth</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td>
                <a
                  href="https://futurecheer.net/live-competitions/fc-internationals/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  FC Internationals webpage
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">ICC</th>
              <td>Summer Jam</td>
              <td>20th-21st Jul 2024</td>
              <td>Norbeck Castle Hotel, Blackpool</td>
              <td className="text-center">
                <i className="fa-solid fa-check"></i>
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td>
                <a
                  href="https://w-cheer.net/icc-competitions/summer-jam/"
                  target="_blank"
                  rel="noreferrer noonpener"
                >
                  ICC Summer Jam webpage
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Competitions;
