import React from 'react';
import Button1 from '../../styled compponents/Buttons/Button1';
import './Industries.scss';

const Industries = () => {
  return (
    <>
      <div className="Academics">
        <div className="text-center">
          <h1>Reap the value of AI through our Capability building Platform</h1>
          <br /> <br />
          <h5>
            Ensuring future readiness of your Organization through
            <br /> requisite AI capabilities of your team!
          </h5>
          <br />
          <Button1 title="Get Started Now" />
        </div>
      </div>

      <div className="programnamesin">
        <div className="progholderin">
          <div className="programcardin">
            <h3> AI ML Immersion Lab</h3>
          </div>
          <div className="programcardin">
            <h3>AI Ide8 and Innova8 Workshop</h3>
          </div>
          <div className="programcardin">
            <h3>AI ML Hands On</h3>
          </div>
          <div className="programcardin">
            <h3>Industry 4.0 + IOT Program</h3>
          </div>
        </div>
      </div>

      <div className="statsi">
        <div className="statcontenti">
          <div className="statdata">
            <h1>
              {' '}
              83<sup>%</sup>
            </h1>
            <hr />
            <br />
            <h6>
              Organizations admit that <br /> they are having skills gap
            </h6>
          </div>
          <div className="statdata">
            <h1>
              77<sup>%</sup>
            </h1>
            <hr />
            <br />
            <h6>
              Indian companies offer training <br /> to all employees
            </h6>
          </div>
          <div className="statdata">
            <h1>
              14<sup>%</sup>
            </h1>
            <hr />
            <br />
            <h6>
              global workforce need to switch <br /> or acquire new occupations
              by 2030
            </h6>
          </div>
          <div className="statdata">
            <h1>
              87<sup>%</sup>
            </h1>
            <hr />
            <br />
            <h6>
              executives said there <br /> are skills gap in the workforce
            </h6>
          </div>
        </div>
      </div>

      <div className="programdetails">
        <div className="firstprogram">
          <div className="leftside">
            <img
              src="https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="rightside">
            <h3> Custom Made Programs</h3>
            <h2>
              {' '}
              Every Organization is different so our programs also.{' '}
            </h2>{' '}
            <br />
            <p>
              <ul>
                <li>
                  We create programs to make your business more successful
                </li>
                <li>
                  {' '}
                  Every company has its own unique workforce and needs. Ikigai
                  Lab creates tailor-made learning programs for each
                  organization.
                </li>
              </ul>{' '}
            </p>
          </div>
        </div>
        <div className="firstprogram">
          <div className="rightside">
            <h3>Outcome Based Learning</h3>
            <h2>All the programs have specific learning outcomes.</h2> <br />
            <p>
              <ul>
                <li>
                  {' '}
                  Participants will be able to come up with the solutions for
                  business Problems.
                </li>
                <li>
                  {' '}
                  Participants will be able to come up with the real business
                  use cases.
                </li>
              </ul>{' '}
            </p>
          </div>
          <div className="leftside">
            <img
              src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="firstprogram">
          <div className="leftside">
            <img
              src="https://images.pexels.com/photos/8353802/pexels-photo-8353802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="rightside">
            <h3>Progress Reports</h3>
            <h2>
              {' '}
              Improve the performance and learning by tracking their
              performances
            </h2>{' '}
            <br />
            <p>
              {' '}
              <ul>
                <li>See the overall results of the programs in a report</li>
                <li>
                  {' '}
                  Results of quizzes, assignments of all the participants on a
                  regular basis
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div className="joinnowa">
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

export default Industries;
