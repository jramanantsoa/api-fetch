import React, { Fragment } from "react";

const Section = ({ title, data, color }) => {
  return (
    <div>
      <center>
        <h2>{title}</h2>
      </center>
      {data.map((el) => (
        <Fragment>
          <div className="card" style={{ backgroundColor: color }}>
            <div className="card-body">
              <h5 className="card-title">{el.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {el.description}
              </h6>
              {el.git ? (
                <Fragment>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Keywords : {el.keywords}
                  </h6>
                  <a href={el.app} rel="noreferrer" target="_blank">
                    Link
                  </a>
                  <br></br>
                  <a href={el.git} rel="noreferrer" target="_blank">
                    Source code
                  </a>
                </Fragment>
              ) : (
                <h1></h1>
              )}
            </div>
          </div>
          <hr className="solid"></hr>
        </Fragment>
      ))}
    </div>
  );
};
export default Section;
