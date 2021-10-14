interface CardProps {

    // img: string
    nameSpace: string,
    missionIds: string[],
    launchYear: string,
    successLaunch: boolean,
    successLanding: boolean,

}

export const Card = (props: CardProps) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="Mission Logo" />
      <div className="card-body">
          <h5>{props.nameSpace}</h5>
        <div>
          <h6>Mission Ids: </h6>{" "}
          <ol>
            {props.missionIds}
          </ol>
        </div>
        <div>
          <span>
            <span>Launch Year: </span>{props.launchYear}
          </span>
        </div>
        <div>
          <span>
            <span>Successful Launch: </span>{props.successLaunch}
          </span>
        </div>
        <div>
          <span>
            <span>Successful Landing: </span>{props.successLanding}
          </span>
        </div>
      </div>
    </div>
  );
};
