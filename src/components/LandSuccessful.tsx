import axios from "axios";
import React, { useEffect, useState } from "react";

import img from "../image/NASA_logo.svg.png";
import { useParams } from "react-router-dom";
import { Card } from "../Global/Card";

export const LandSuccessful = () => {
  const { id } = useParams<{ id: string }>();
  const [status, setStatus] = useState<any>([]);

  useEffect(() => {
    async function fetchStatus() {
      try {
        const response = await axios.get(
          `https://api.spacexdata.com/v3/launches?limit=100&land_success=${id}`
        );

        setStatus(response.data);
      } catch (err: any) {
        console.log(err.response);
      }
    }
    fetchStatus();
  }, [id]);

  return (
    <div className="margin15em displayFlex flexWrap">
      {status.map((elem: any, i: number) => {
        return (
          <div key={i} className="margin">
            <Card
              img={elem.links.mission_patch ? elem.links.mission_patch : img}
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
              successLanding={elem.rocket.first_stage.cores.map((land: any) => {
                
                
                const landing = land.land_success.toString()

                return land.land_success !== null
                  ? <li>{landing}</li>
                  : "Not found";
              })}
            />
          </div>
        );
      })}
    </div>
  );
};
