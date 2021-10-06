import React from 'react'
import "./Progtest.scss"

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Progtest = () => {
    return (
        <div className="tesiholderind">
          <h1>Testimonials</h1>
         <div className="testcontind">
           <Swiper 
           spaceBetween={0}
           slidesPerView={3}
           navigation
           >
             <SwiperSlide>
               <div className="cardcontind">
                 <div className="carddataind">
                 <p> Thank you for conducting one day program on Artificial Intelligence (AI) to our top management executives. The program has been conducted excellently.</p>
              <div className="testname">
              <h3>P.Subrahmanyam CGM (Corporate Planning)</h3>
              </div>
             
                 </div>
                
               </div>
             </SwiperSlide>
             
              <SwiperSlide>
               <div className="cardcontind">
                 <div className="carddataind">
                 <p>It was an amazing class where we learnt the practical aspect of AI & ML.The lectures were wonderful and thoughtfully organized in a way to present it to the industry.</p>
              <h3>Dr. Manish Kumar Srivastava (G.M.)</h3>
                 </div>
                
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="cardcontind">
                 <div className="carddataind">
                 <p> 
 The course provides good balance of less theory and more practical. Trainers explained each and everything with daily related things. Nice explain of each concepts.</p>
              <h3>Shweta Dharik</h3>
                 </div>
                
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="cardcontind">
                 <div className="carddataind">
                 <p>Data Science and AI, my learning experience is great. I learned lot of things and its challenging as well as fun doing it. Firstly it seems that there are lots of algorithms and maths but when you start learning it you feel good. By learning data science you learn lots of stuff .</p>
              <h3>Munish Chaodhary</h3>
                 </div>
                
               </div>
             </SwiperSlide>
             <SwiperSlide>
             <div className="cardcontind">
                 <div className="carddataind">
                 <p>The experience was very amazing. Firstly, I didn't know python and I thought that it is difficult to learn, but the teacher taught me from the basic level to a high level and cleared all my doubts. And after python I have learned stats, machine learning, Artificial Neural Network, CNN, MySQL, MongoDB.</p>
              <h3>Jitender Thakur </h3>
                 </div>
                
               </div>
             </SwiperSlide>
             <SwiperSlide>
             <div className="cardcontind">
                 <div className="carddataind">
                 <p>The course was very well planned to make Data science understandable to a fresher like me. All the mentors were nice to me throughout my data science course. The instructors had in-depth knowledge about the subject and the industry. I was trained with all the industry standard tools in Data Science.</p>
              <h3>Akhil Thakur</h3>
                 </div>
                
               </div>
             </SwiperSlide>
             <SwiperSlide>
             <div className="cardcontind">
                 <div className="carddataind">
                 <p>This training helps to build my skill set in all prerequisites which are required for becoming a
 Data Scientist such as Python, Machine Learning etc. All the Mentors are very good, and all have
 in-depth knowledge of every concept they taught us, and they helped to get introduced with various tools and technologies required for a Data Scientist.</p>
              <h3>Hrithik Sharma</h3>
                 </div>
                
               </div>
             </SwiperSlide>
             <SwiperSlide>
             <div className="cardcontind">
                 <div className="carddataind">
                 <p>I am really learning a lot and feel like I am ahead of the curve. The teachers at THEIKIGAILAB are great,
 explaining everything in an understandable way. I am really getting into coding and feel
great about my future in a new way.</p>
              <h3>Jaskaran Singh Sandhu</h3>
                 </div>
                
               </div>
             </SwiperSlide>
             <SwiperSlide>
             <div className="cardcontind">
                 <div className="carddataind">
                 <p>My learning experience has been great. All the teachers are good and I am able to understand every thing that they are teaching . Also everything is being taught in a systematic way and due to this I have developed interest in coding.</p>
              <h3>Himanshu Srivastava</h3>
                 </div>
                
               </div>
             </SwiperSlide>
             <SwiperSlide>
             <div className="cardcontind">
                 <div className="carddataind">
                 <p>I am really enjoying it as learning something new from
scratch with friends in a classroom feels exciting as well as pushes up to learn further.</p>
              <h3>Shubh Kumar</h3>
                 </div>
                
               </div>
             </SwiperSlide>
             
           </Swiper>
         </div>

        </div>

        
    )
}

export default Progtest

