import React from 'react';
import Button1 from '../../styled compponents/Buttons/Button1';
import Degree from '../../assets/degree.png';
import Job from '../../assets/job.png';
import './Program1.scss';
import Asociate from '../Associations/Asociate';
import Onlinelearn from './Onlinelearn';
import Propcard from './Propcard';
import Asociates from '../Associations/Asociate';
import Progtest from './Progtest';
const Program1 = () => {
  return (
    <>
      <div className="prog1head">
        <div className="lefthead">
          <h1>
            The Challenges of Adopting <br />
            Data and Analytics
          </h1>
          <h3>Meet your digital tranformation goals today</h3>
          <Button1 title="Apply Now" />
        </div>
        <div className="righthead"></div>
      </div>

      <div className="Academicsindividual">
        <div className="text-center">
          <h1>The Challenges of Adopting Data and Analytics </h1>
          <br /> <br />
          <h5> Meet your digital tranformation goals today</h5>
          <br />
          <Button1 title="Get Started Now" />
        </div>
      </div>

      <Onlinelearn />
      <Propcard />

      {/* <Progtest /> */}

      <div className="associationsp " style={{ backgroundColor: 'white' }}>
        <h1 className="text-center " style={{ paddingTop: '80px' }}>
          We collaborate with Top leading Universities and Companies
        </h1>
        <div
          style={{
            paddingTop: '80px',
            height: '60vh',
            backgroundColor: 'white',
          }}
        >
          <Asociates />
        </div>
      </div>

      <div className="joinnowat">
        <h1 className="text-center">
          Find out how Ikigai Lab can help you <br /> in creating skill and
          applied research ecosystem <br /> at your institution.
        </h1>
        <br />
        <br />
        <button>
          <h2>Schedule a Meeting</h2>
        </button>
      </div>
    </>
  );
};

export default Program1;
