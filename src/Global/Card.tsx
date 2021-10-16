interface CardProps {
  img: string;
  flightNumber: number;
  nameSpace: string;
  missionIds: string[];
  launchYear: string;
  successLaunch: string;
  successLanding: boolean;
}

export const Card = (props: CardProps) => {
  return (
    <div
      className="card"
      style={{ width: "19rem", height: "34em", borderRadius: "10px" }}
    >
      <img
        style={{ padding: "2em" }}
        src={props.img}
        className="card-img-top"
        alt="Mission Logo"
      />
      <div className="card-body" style={{}}>
        <h5 className="colorBlue">
          {props.nameSpace} #{props.flightNumber}
        </h5>
        <div>
          <span className="fontWeightBolder">Mission Ids: </span>{" "}
          <ol className="listStyle">{props.missionIds}</ol>
        </div>
        <div>
          <span>
            <span className="fontWeightBolder">Launch Year: </span>
            {props.launchYear}
          </span>
        </div>
        <div>
          <span>
            <span className="fontWeightBolder">Successful Launch: </span>
            {props.successLaunch}
          </span>
        </div>
        <div>
          <span className="fontWeightBolder">Successful Landing: </span>
          <ol className="listStyle">{props.successLanding}</ol>
        </div>
      </div>
    </div>
  );
};
