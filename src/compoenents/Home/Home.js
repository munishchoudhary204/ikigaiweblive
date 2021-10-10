import React from 'react';
import Button1 from '../../styled compponents/Buttons/Button1';
import Typed from 'react-typed';
import './Home.scss';
import './Home.css';
import CardPanel from '../../styled compponents/Cards/CardPanel';
import Testimonial from './Testimonials/Testimonial';
import Joinus from '../Home/Joinus/Joinus';
import Asociate from '../Associations/Asociate';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Container, CardGroup } from 'react-bootstrap';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import government from '../../assets/government.png';
import shweta from '../../images/shweta.jpg';
import jaskaran from '../../images/jaskaran.jpg';

import akhil from '../../images/akhil.jpg';
import ritik from '../../images/ritik.jpg';

import PSubrah from '../../images/PSubrah.jpg';
import Manish from '../../images/Manish.jpg';

const responsiveTestimonial = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const IkigaiKeypoints = [
  {
    title: 'Case Studies',
    text: 'All programs are equipped with real case studies to give you a holistic view of the problem and its solution',
  },
  {
    title: 'Capstone Learnings',
    text: 'Capstone Projects at the end of each program to ensure that you can apply your learnings',
  },
  {
    title: 'Top Associations',
    text: 'Association with institutions like IIT Kanpur, IIT Patna, GLA University, IIT Ropar, etc.',
  },
  {
    title: 'Applied Research',
    text: 'Ecosystem of research labs across seven IITs to bring Industry and Academia Together',
  },
];

const Home = () => {
  return (
    <>
      {/* <div className="header-wrapper"> */}

      <div className="main-info">
        <h1 className="text-center">
          Simplified Learnings in New Technologies for
        </h1>
        <br />
        <Typed
          className="typed-text"
          strings={['Individuals', 'Academics', 'Industry', 'Goverment']}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <br />
        <Button1 title="Get Started" />
      </div>
      {/* </div> */}

      <div className="four-card-img text-center">
        <div class="row1-container">
          <div class="box box-down cyan" style={{ backgroundColor: 'white' }}>
            <h2>Individuals</h2>
            <p>Students and Working Professionals</p>
            <img
              src="https://assets.codepen.io/2301174/icon-supervisor.svg"
              alt=""
            />
            <div className="end">
              <Link
                to="/program1"
                style={{ color: 'Blue', textDecoration: 'none' }}
              >
                Explore more <p className="far fa-arrow-alt-circle-right "></p>
              </Link>
            </div>
          </div>
          <div class="box red" style={{ backgroundColor: 'white' }}>
            <h2>Academics</h2>
            <p>For Institutions</p>
            <img
              src="https://assets.codepen.io/2301174/icon-team-builder.svg"
              alt=""
            />
            <div className="end">
              <Link
                to="/academics"
                style={{ color: 'Blue', textDecoration: 'none' }}
              >
                Explore more <p className="far fa-arrow-alt-circle-right "></p>
              </Link>
            </div>
          </div>
          <div class="box box-down blue" style={{ backgroundColor: 'white' }}>
            <h2>Industry</h2>
            <p>For Businesses</p>
            <img
              src="https://assets.codepen.io/2301174/icon-calculator.svg"
              alt=""
            />
            <div className="end">
              <Link
                to="/industry"
                style={{ color: 'Blue', textDecoration: 'none' }}
              >
                Explore more <p className="far fa-arrow-alt-circle-right "></p>
              </Link>
            </div>
          </div>
        </div>
        <div class="row2-container">
          <div class="box orange" style={{ backgroundColor: 'white' }}>
            <h2>Government</h2>
            <p>For Government Institutions</p>
            <img src={government} height="70px" alt="" />
            <div className="end">
              <Link
                to="/government"
                style={{ color: 'Blue', textDecoration: 'none' }}
              >
                Explore more <p className="far fa-arrow-alt-circle-right "></p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="ikigai-keypoints p-5 text-center"
        style={{ backgroundColor: 'white' }}
      >
        <h1 className="text-center">
          How Ikigai Lab is helping you to achieve your goals
        </h1>
        <br />
        <br />
        <Container fluid>
          <Row xs={1} md={4} className="g-4">
            {IkigaiKeypoints.map((item, idx) => (
              <CardGroup>
                <Card
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '30px',
                  }}
                  className="py-5 shadow "
                >
                  <Card.Body>
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

      {/* <Testimonial /> */}

      <div
        className="p-5"
        style={{
          backgroundColor: 'white',
        }}
      >
        <h1
          className="text-center "
          style={{
            paddingTop: '90px',
            paddingBottom: '40px',
            backgroundColor: 'white',
          }}
        >
          Testimonials
        </h1>
        <Carousel responsive={responsiveTestimonial}>
          <div className=" m-3">
            <div class="card  shadow-sm border-0 px-4">
              <div class="card-body">
                <div className="row">
                  <div className="col-4">
                    <img
                      src={Manish}
                      alt=""
                      width="120"
                      class="img-fluid  mb-3  thun shadow-sm"
                    />
                  </div>
                  <div className="col-8 align-self-center">
                    <h5 className="font-weight-bold ">
                      Dr. Manish Kumar Srivastava (G.M.) <br />
                    </h5>
                  </div>
                </div>
                <p
                  class="card-text text-justify"
                  style={{ textAlign: 'justify', wordSpacing: '-2px' }}
                >
                  <i className="fas fa-quote-left"></i> It was an amazing class
                  where we learnt the practical aspect of AI & ML. The lectures
                  were wonderful and thoughtfully organized in a way to present
                  it to the industry.
                </p>
              </div>
            </div>
          </div>
          <div className=" m-3">
            <div class="card  shadow-sm border-0 px-4">
              <div class="card-body">
                <div className="row">
                  <div className="col-4 ">
                    <img
                      src={PSubrah}
                      alt=""
                      width="120"
                      class="img-fluid  mb-3  thun shadow-sm"
                    />
                  </div>
                  <div className="col-8 align-self-center">
                    <h5 className="font-weight-bold ">
                      P.Subrahmanyam <br />
                      CGM (Corporate Planning)
                    </h5>
                  </div>
                </div>
                <p
                  class="card-text text-justify"
                  style={{ textAlign: 'justify', wordSpacing: '-2px' }}
                >
                  <i className="fas fa-quote-left"></i> Thank you for conducting
                  one day program on Artificial Intelligence (AI) to our top
                  management executives. The program has been conducted
                  excellently.
                </p>
              </div>
            </div>
          </div>
          <div className=" m-3">
            <div class="card  shadow-sm border-0 px-4">
              <div class="card-body">
                <div className="row">
                  <div className="col-4 ">
                    <img
                      src={shweta}
                      alt=""
                      width="120"
                      class="img-fluid  mb-3  thun shadow-sm"
                    />
                  </div>
                  <div className="col-8 align-self-center">
                    <h5 className="font-weight-bold ">Shweta Dharik</h5>
                  </div>
                </div>
                <p
                  class="card-text text-justify "
                  style={{ textAlign: 'justify', wordSpacing: '-2px' }}
                >
                  <i className="fas fa-quote-left"></i> The course provides good
                  balance of less theory and more practical. Trainers explained
                  each and everything with daily related things. Nice explain of
                  each concepts.
                </p>
              </div>
            </div>
          </div>
          <div className=" m-3">
            <div class="card  shadow-sm border-0 px-4">
              <div class="card-body">
                <div className="row">
                  <div className="col-4">
                    <img
                      src={jaskaran}
                      alt=""
                      width="120"
                      class="img-fluid  mb-3  thun shadow-sm"
                    />
                  </div>
                  <div className="col-8 align-self-center">
                    <h5 className="font-weight-bold pt-2">
                      Jaskaran Singh Sandhu
                    </h5>
                  </div>
                </div>
                <p
                  class="card-text text-justify "
                  style={{ textAlign: 'justify', wordSpacing: '-2px' }}
                >
                  <i className="fas fa-quote-left"></i> I am really learning a
                  lot and feel like I am ahead of the curve. The teachers at
                  THEIKIGAILAB are great, explaining everything in an
                  understandable way. I feel great about my future in a new way.
                </p>
              </div>
            </div>
          </div>
          <div className=" m-3">
            <div class="card  shadow-sm border-0 px-4">
              <div class="card-body">
                <div className="row">
                  <div className="col-4">
                    <img
                      src={akhil}
                      alt=""
                      width="120"
                      class="img-fluid  mb-3  thun shadow-sm"
                    />
                  </div>
                  <div className="col-8 align-self-center">
                    <h5 className="font-weight-bold ">Akhil Thakur</h5>
                  </div>
                </div>
                <p
                  class="card-text text-justify "
                  style={{ textAlign: 'justify', wordSpacing: '-2px' }}
                >
                  <i className="fas fa-quote-left"></i> The course was very well
                  planned to make the Data science understandable to a fresher
                  like me.
                  {/* All the mentors were nice to me throughout course. I
                  was trained with all the industry standard tools. */}
                  The instructors had in-depth knowledge about the subject and
                  the industry.
                </p>
              </div>
            </div>
          </div>

          <div className=" m-3">
            <div class="card  shadow-sm border-0 px-4">
              <div class="card-body">
                <div className="row">
                  <div className="col-4 ">
                    <img
                      src={ritik}
                      alt=""
                      width="120"
                      class="img-fluid  mb-3  thun shadow-sm"
                    />
                  </div>
                  <div className="col-8 align-self-center">
                    <h5 className="font-weight-bold ">Hritik</h5>
                  </div>
                </div>
                <p
                  class="card-text text-justify "
                  style={{ textAlign: 'justify', wordSpacing: '-2px' }}
                >
                  <i className="fas fa-quote-left"></i> This training helps to
                  build my skill set in all prerequisites which are required for
                  becoming a Data Scientist such as Python, Machine Learning
                  etc. All the Mentors are very good.
                  {/* and all have
                    in-depth knowledge of every concept they taught us, and they
                    helped to get introduced with various tools and technologies
                    required for a Data Scientist. */}
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="associations " style={{ backgroundColor: 'white' }}>
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
          <Asociate />
        </div>
      </div>

      <div
        className="js"
        style={{ paddingBottom: '50px', backgroundColor: 'white' }}
      >
        <Joinus />
      </div>
    </>
  );
};

export default Home;
