import React from "react";

import { Link } from "react-router-dom";

interface BtnProps {
  des: string;
}

export const Btn = (props: BtnProps) => {
  return (
    <div>
      <Link to="/test">
        <button type="button" className="btn btn-success margin">
          {props.des}
        </button>
      </Link>
    </div>
  );
};
