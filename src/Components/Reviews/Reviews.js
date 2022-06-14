import React from 'react';
import './Reviews.css';

import Avatar1 from '../../images/avatar-anisha.png';
import Avatar2 from '../../images/avatar-ali.png';
import Avatar3 from '../../images/avatar-richard.png';
import Avatar4 from '../../images/avatar-shanai.png';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
 

const Reviews = () => {

  

  return (

    <div className="reviews">
        <div className="reviews-title">
            <h1>What they've said</h1>
        </div>

        <Swiper

        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        className='reviews-slider'>
            <SwiperSlide>
                
                    <img src={Avatar1} alt="" />
                    <h2>Anisha Li</h2>
                    <p>“Manage has supercharged our team's workflow. The ability to maintain 
                    visibility on larger milestones at all times keeps everyone motivated.”</p>
                
            </SwiperSlide>
            <SwiperSlide>
                
                    <img src={Avatar2} alt="" />
                    <h2>Ali Bravo</h2>
                    <p>“We have been able to cancel so many other subscriptions since using 
                    Manage. There is no more cross-channel confusion and everyone is much 
                    more focused.”</p>
               
            </SwiperSlide>
            <SwiperSlide>
                
                    <img src={Avatar3} alt="" />
                    <h2>Richard Watts</h2>
                    <p>“Manage allows us to provide structure and process. It keeps us organized 
                    and focused. I can’t stop recommending them to everyone I talk to!”</p>
                
            </SwiperSlide>
            <SwiperSlide>
               
                    <img src={Avatar4} alt="" />
                    <h2>Shanai Gough</h2>
                    <p>“Their software allows us to track, manage and collaborate on our projects 
                    from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
                
            </SwiperSlide>
        </Swiper>

        <div className="btn">
            <button>Get Started</button>
        </div>

    </div>

 
  )
}

export default Reviews