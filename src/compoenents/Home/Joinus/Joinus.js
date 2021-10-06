import React from "react";
import "./Joinus.scss";
const Joinus = () => {
  return (
    <>
      <div className="joinus">
        <br />
        <div className="joinustitle">
          <h1 className="text-center">Join Ikigai Team </h1>
          <h2 className="m-3"> Make an impact On the world</h2>
        </div>
        <div className="jscards">
          <div className="jscc">
            <div className="imgholder1">
              <h2>Content Creator</h2>
            </div>
            <div className="imgholder2">
              <h2> Instructor</h2>
            </div>
            <div className="imgholder3">
              <h2>Campus Mentor</h2>
            </div>
            <div className="imgholder4">
              <h2> Campus Ambassador</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Joinus;
