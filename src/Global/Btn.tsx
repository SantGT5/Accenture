import { Link } from "react-router-dom";

interface BtnProps {
  des: string;
  to: string;
}

export const Btn = (props: BtnProps) => {
  return (
    <div>
      <Link to={props.to}>
        <button type="button" className="btn btn-success margin">
          {props.des}
        </button>
      </Link>
    </div>
  );
};
