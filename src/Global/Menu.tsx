import { Link } from "react-router-dom";

// Global Component
import { Btn } from "./Btn";

export const FilterMenu = () => {
  return (
    <div className="filterBorder backGroundWhite heightFit">
      <div className="flexBetween">
        <h5>Filters</h5>
        <Link to="/" className="colorBlack">
          <span className="margin">
            <i className="fa-solid fa-house"></i>
          </span>
        </Link>
      </div>
      <div className="center">
        <div className="margin">
          <div>
            <span>Launch Year</span>
          </div>
        </div>
      </div>
      <div className="center">
        <hr className="hr" />
      </div>
      <div className="flexBetween flexWrap margin">
        <Btn des="2006" to="/launch_year/2006" />
        <Btn des="2007" to="/launch_year/2007" />
        <Btn des="2008" to="/launch_year/2008" />
        <Btn des="2009" to="/launch_year/2009" />
        <Btn des="2010" to="/launch_year/2010" />
        <Btn des="2011" to="/launch_year/2011" />
        <Btn des="2012" to="/launch_year/2012" />
        <Btn des="2013" to="/launch_year/2013" />
        <Btn des="2014" to="/launch_year/2014" />
        <Btn des="2015" to="/launch_year/2015" />
        <Btn des="2016" to="/launch_year/2016" />
        <Btn des="2017" to="/launch_year/2017" />
        <Btn des="2018" to="/launch_year/2018" />
        <Btn des="2019" to="/launch_year/2019" />
        <Btn des="2020" to="/launch_year/2020" />
      </div>

      <div className="center">
        <div>
          <span>Successful Launch</span>
        </div>
      </div>
      <div className="center">
        <hr className="hr" />
      </div>

      <div className="flexBetween flexWrap margin">
        <Btn des="True" to="/launch_success/true" />
        <Btn des="False" to="/launch_success/false" />
      </div>

      <div className="center">
        <div>
          <span>Successful Landing</span>
        </div>
      </div>
      <div className="center">
        <hr className="hr" />
      </div>

      <div className="flexBetween flexWrap margin">
        <Btn des="True" to="/land_success/true" />
        <Btn des="False" to="/land_success/false" />
      </div>
    </div>
  );
};
