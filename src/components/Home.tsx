import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../Global/Card";

interface dataAPI{
  flight_number: number
  launch_success: boolean
  launch_year: string
  links: {mission_patch: string}
  mission_id: string[]
  mission_name: string
  rocket: {first_stage:{cores: []}}
}

export const Home = () => {
  const [data, setData] = useState<dataAPI[]>([]);

  console.log(data);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<dataAPI[]>(
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
      {data.map((elem: dataAPI, i: number) => {
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
              successLanding={elem.rocket.first_stage.cores.map((land: any) => {
                return land.land_success !== null ? (
                  <li>{land.land_success.toString()}</li>
                ) : (
                  "Not found"
                );
              })}
            />
          </div>
        );
      })}
    </div>
  );
};
