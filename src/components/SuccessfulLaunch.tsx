import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import img from "../image/NASA_logo.svg.png";

// Global Component
import { Card } from "../Global/Card";

interface dataAPI {
  flight_number: number;
  launch_success: boolean;
  launch_year: string;
  links: { mission_patch: string };
  mission_id: string[];
  mission_name: string;
  rocket: { first_stage: { cores: [] } };
}

export const SuccessfulLaunch = () => {
  
  const { id } = useParams<{ id: string }>();
  const [status, setStatus] = useState<dataAPI[]>([]);

  useEffect(() => {
    async function fetchStatus() {
      try {
        const response = await axios.get<dataAPI[]>(
          `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${id}`
        );

        setStatus(response.data);
      } catch (err: any) {
        console.log(err.response);
      }
    }
    fetchStatus();
  }, [id]);

  return (
    <div>
      {status.length ? (
        <div className="margin15em displayFlex flexWrap">
          {status.map((elem: dataAPI, i: number) => {
            return (
              <div key={i} className="margin">
                <Card
                  img={
                    elem.links.mission_patch ? elem.links.mission_patch : img
                  }
                  flightNumber={elem.flight_number}
                  nameSpace={elem.mission_name}
                  missionIds={elem.mission_id.map((elem: any) =>
                    elem ? <li>{elem}</li> : ""
                  )}
                  launchYear={elem.launch_year}
                  successLaunch={
                    elem.launch_success
                      ? elem.launch_success.toString()
                      : "Not Found"
                  }
                  successLanding={elem.rocket.first_stage.cores.map(
                    (land: any) => {
                      return land.land_success !== null ? (
                        <li>{land.land_success.toString()}</li>
                      ) : (
                        "Not found"
                      );
                    }
                  )}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div
          className="center margin15em"
          style={{ alignItems: "center", height: "20em", minWidth: "15em" }}
        >
          <h3>
            Sorry, we didn't find any result{" "}
            <i className="fa-solid fa-rocket"></i>
          </h3>
        </div>
      )}
    </div>
  );
};
