import React from "react";
import { Btn } from "./Global/Btn";

import { Filter } from "./Filter";

export const FilterMenu = () => {
  return (
      <div className="displayFlex">
    <div className="filterBorder colorWhite heightFit">
      <h5>Filters</h5>
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
        <Btn des="2006" />
        <Btn des="2007" />
        <Btn des="2008" />
        <Btn des="2009" />
        <Btn des="2010" />
        <Btn des="2011" />
        <Btn des="2012" />
        <Btn des="2013" />
        <Btn des="2014" />
        <Btn des="2015" />
        <Btn des="2016" />
        <Btn des="2017" />
        <Btn des="2018" />
        <Btn des="2019" />
        <Btn des="2020" />
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
        <Btn des="True" />
        <Btn des="False" />
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
        <Btn des="True" />
        <Btn des="False" />
      </div>
      
    </div>

    <Filter/>

    </div>
  );
};
