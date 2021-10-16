export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="container-fluid" style={{ width: "100%" }}>
          <div className="navbar-brand">
            <h3>SpaceX Launch Programs</h3>
            <h6>
              Developed by:&nbsp;
              <a
                rel="noreferrer"
                href="https://github.com/SantGT5"
                target="_blank"
              >
                <span>
                  SantGT5{" "}
                  <i style={{ fontSize: "20px" }} className="fab fa-github"></i>
                </span>
              </a>
            </h6>
          </div>
        </div>
      </nav>
    </div>
  );
};
