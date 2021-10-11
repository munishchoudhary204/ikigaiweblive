import React from 'react';
import Button1 from '../../styled compponents/Buttons/Button1';
import './Academics.scss';
import Acess from '../../assets/access.png';
import Innov from '../../assets/innov.png';
import { Row, Col, Card, Container, CardGroup } from 'react-bootstrap';

const IkigaiKeypoints = [
  {
    title: 'Transformative',
    text: 'Students have the opportunity to work on real-life projects for companies.',
    src: 'https://image.flaticon.com/icons/png/512/1925/1925161.png',
  },
  {
    title: 'Accessible',
    text: 'Students can learn from the best in the industry at their own pace with their college education.',
    src: Acess,
  },
  {
    title: 'Innovative',
    text: 'Top Students and their projects have the chance to be featured on our blog, Github, or even the Ikigai Lab website.',
    src: Innov,
  },
  {
    title: 'Job Ready',
    text: 'Students are able to enter the market of new technologies with an in-demand skill set that will make them stand out from the crowd.',
    src: 'https://image.flaticon.com/icons/png/512/2942/2942821.png',
  },
];

const Academics = () => {
  return (
    <>
      <div className="Academics">
        <div className="text-center">
          <h1>Skills and Applied Research Ecosystem </h1>
          <br /> <br />
          <h5> Unleash the potential of your students and faculty</h5>
          <br />
          <Button1 title="Get Started Now" />
        </div>
      </div>

      <div className="programnames">
        <div className="progholder">
          <div className="programcard">
            <h3> Centre of Innovation and Research Translation</h3>
            <p>Skills and Applied Research Ecosystem</p>
          </div>
          <div className="programcard">
            <h3>Augmented B.Tech AI</h3>
            <p>
              {' '}
              Industry Relevant Subjects augmented with existing B.Tech/B.Tech
              AI
            </p>
          </div>
          <div className="programcard">
            <h3>Institute Research Development Program (iRDP)</h3>
            <p>Helping academic researchers to translate their research</p>
          </div>
          <div className="programcard">
            <h3>Bootcamps</h3>
            <p> Short Duration L&D programs in the field of new technologies</p>
          </div>
          <div className="programcard">
            <h3>Faculty Development Program</h3>
            <p>
              Helping faculties to understand new technologies and how to
              leverage Web 3.0 in their teachings.
            </p>
          </div>
          <div className="programcard">
            <h3>AI Innovation Platform</h3>
            <p> Industry relevant projects for researchers and faculties</p>
          </div>
        </div>
      </div>

      <div
        className="keyfeaturs"
        style={{ backgroundColor: '#0D101E', color: 'white' }}
      >
        <div className="  mx-5">
          <h1
            className="text-center"
            style={{
              paddingTop: '30px',
              paddingBottom: '30px',
            }}
          >
            Program Features
          </h1>
          <br />
          <br />
          <Container fluid>
            <Row xs={1} md={4} className="g-4">
              {IkigaiKeypoints.map((item, idx) => (
                <CardGroup>
                  <Card
                    style={{
                      backgroundColor: '#202330',
                      color: 'white',
                      borderRadius: '10px',
                    }}
                    className="py-3 shadow "
                  >
                    <Card.Body>
                      <img src={item.src} height="50px" width="50px" />
                      <br />
                      <br />
                      <Card.Title>
                        <b>{item.title}</b>
                      </Card.Title>
                      <hr />
                      <Card.Text>{item.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              ))}
            </Row>
          </Container>
        </div>
      </div>

      <div className="programdetailasa">
        <div className="firstprograma">
          <div className="leftside">
            <img
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </div>
          <div className="rightside">
            {/* <h5>case study</h5> */}
            <h2> Learning through practice</h2>
            <p>
              By combining online lectures and real-life projects students have
              the opportunity to immediately put theoretical knowledge into
              practice. Students do practice on real industrial case studies.
            </p>
          </div>
        </div>
        <div className="firstprograma">
          <div className="rightside">
            {/* <h5>case study</h5> */}
            <h2>Directly from the Data Scientists to your students</h2>
            <p>
              With the experience of professionals in the field of AI and Deep
              Learning. Training is available in the form of live instructor-led
              courses and 1-on1 mentoring.
            </p>
          </div>
          <div className="leftside">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="firstprograma">
          <div className="leftside">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
          </div>
          <div className="rightside">
            {/* <h5>case study</h5> */}
            <h2> Applied Research Ecosystem</h2>
            <p>
              Connecting Academia with Industry. Helping academic research in
              translation. Academics should lead industry
            </p>
          </div>
        </div>
      </div>
      <div className="joinnowa">
        <h1
          className="text-center"
          style={{
            paddingTop: '20vh',
            fontFamily: "'Noto Serif', serif",
          }}
        >
          Find out how Ikigai Lab can help you <br /> in creating skill and
          applied research ecosystem <br /> at your institution.
        </h1>
        <br />
        <br />
        <button>Schedule a Meeting</button>
      </div>
    </>
  );
};

export default Academics;
