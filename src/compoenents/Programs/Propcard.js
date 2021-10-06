import React from 'react';
import './Propcard.scss';
import { Row, Col } from 'react-bootstrap';
const Propcard = () => {
  return (
    <div className="popcards">
      {/* <div className="popcard">
        <div class="preview">
          <div class="left-preview"></div>

          <div class="right-preview">
            <div>
              <h2>DATA-SCIENCE SUPER 30</h2> <hr />
              <br />
              <p>
                <ul>
                  <li>Guaranteed Placement Offer of 5.5 Lakhs</li>
                  <li>6 Months Paid Internship</li>
                  <li>250+ Hours of Live Sessions</li>
                  <li>Capstone Projects</li>
                  <li>
                    Pay 50% Fees at the begining of the course and rest 50%
                    after getting the Data Scientist Job
                  </li>
                  <button
                    type="button"
                    class="btn btn-primary mt-3 shadow"
                    style={{ backgroundColor: '#0E3B7D' }}
                  >
                    Read More
                  </button>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <Row className="justify-content-md-center ">
        <Col sm={12} lg="5">
          <img
            src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="dss30"
            className="img-fluid rounded shadow"
          />
        </Col>
        {/* <Col md="auto">Variable width content</Col> */}
        <Col sm={12} lg="5">
          <h2>DATA-SCIENCE SUPER 30</h2> <hr />
          <p>
            <ul>
              <li>Guaranteed Placement Offer of 5.5 Lakhs</li>
              <li>6 Months Paid Internship</li>
              <li>250+ Hours of Live Sessions</li>
              <li>Capstone Projects</li>
              <li>
                Pay 50% Fees at the begining of the course and rest 50% after
                getting the Data Scientist Job
              </li>
              <button
                type="button"
                class="btn btn-primary mt-3 shadow"
                style={{ backgroundColor: '#0E3B7D' }}
              >
                Read More
              </button>
            </ul>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Propcard;
