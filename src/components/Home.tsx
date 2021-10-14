import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../Global/Card";

export const Home = () => {
  const [data, setData] = useState<any>([]);

  console.log(data);

  useEffect(() => {
    async function fetchData() {
      try {
        const response: any = await axios.get(
          "https://api.spacexdata.com/v3/launches?limit=100"
        );

        setData(response.data);
      } catch (err: any) {
        console.log(err.response);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="margin15em displayFlex flexWrap">
      {data.map((elem: any, i: number) => {
        return (
          <div key={i} className="margin">
            <Card
              img={elem.links.mission_patch}
              flightNumber={elem.flight_number}
              nameSpace={elem.mission_name}
              missionIds={elem.mission_id.map((elem: any) =>
                elem ? <li>{elem}</li> : ""
              )}
              launchYear={elem.launch_year}
              successLaunch={elem.launch_success.toString()}
              successLanding={elem.rocket.first_stage.cores.map((land: any) =>
                land.land_success !== null
                  ? land.land_success.toString()
                  : "Not found"
              )}
            />
          </div>
        );
      })}
    </div>
  );
};
