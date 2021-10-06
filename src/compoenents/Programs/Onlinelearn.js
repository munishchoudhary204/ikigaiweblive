import React from 'react';
import './Onlinelearn.scss';
import Degree from '../../assets/degree.png';
import Job from '../../assets/job.png';
const Onlinelearn = () => {
  return (
    <div className="online">
      <div className="header">
        <h1>Best Online Learning Experience</h1>
        <br />
      </div>
      <div className="boxholder">
        <div className="boxi red">
          <h2>
            Certification <br /> Course
          </h2>
          <img src={Degree} alt="" />
        </div>
        <div className="boxi orange">
          <h2>
            Live Online <br /> Classes
          </h2>
          <img
            src="https://image.flaticon.com/icons/png/512/3048/3048358.png"
            alt=""
          />
        </div>
        <div className="boxi blue">
          <h2>
            Limited Number Of <br /> Seats
          </h2>
          <img
            src="https://image.flaticon.com/icons/png/512/1584/1584942.png"
            alt=""
          />
        </div>
        <div className="boxi cyan">
          <h2>
            100% <br /> Job Assitance
          </h2>
          <img src={Job} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Onlinelearn;

// <div className="row1-container">
// <div className="box  cyan">
//   <h2>Certification Course</h2>
//   {/* <p>Monitors activity to identify project roadblocks</p> */}
//   <img src={Degree} alt="" />
// </div>

// <div className="box red">
//   <h2>Live Online Classes</h2>
//   {/* <p>Scans our talent network to create the optimal team for your project</p> */}
//   <img src="https://image.flaticon.com/icons/png/512/3048/3048358.png" alt="" />
// </div>

// <div className="box blue">
//   <h2>Limited Number Of Seats</h2>
//   {/* <p>Uses data from past projects to provide better delivery estimates</p> */}
//   <img src="https://image.flaticon.com/icons/png/512/1584/1584942.png" alt="" />
// </div>
// <div className="box orange">
//   <h2>100% Job Assitance</h2>
//   {/* <p>Regularly evaluates our talent to ensure quality</p> */}
//   <img src={Job} alt="" />
// </div>
// </div>
