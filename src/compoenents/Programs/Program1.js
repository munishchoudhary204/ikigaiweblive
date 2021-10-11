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

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import shweta from '../../images/shweta.jpg';
import jaskaran from '../../images/jaskaran.jpg';

import akhil from '../../images/akhil.jpg';
import ritik from '../../images/ritik.jpg';

const Program1 = () => {
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

      <div
        className="p-5"
        style={{
          backgroundColor: 'white',
        }}
      >
        <h1
          className="text-center "
          style={{
            paddingTop: '20px',
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
        </Carousel>
      </div>

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
    </>
  );
};

export default Program1;
