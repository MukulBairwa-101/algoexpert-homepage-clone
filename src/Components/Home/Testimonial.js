import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Scrollbars } from "react-custom-scrollbars-2";
import { testimonial } from "../Assets/data";
import{RiArrowUpLine} from "react-icons/ri";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState(testimonial);
  return (
    <section id="testimonial" className="container-mbt-30">
      <h1 className="center heading-text-h2">And Over 100,000 Satisfied Engineers.</h1>
      <div className="slider-wrapper">

   
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          // 320: {
          //   width: 320,
          //   slidesPerView: 1,
          // },
        }}
      >
        {testimonials.map((item) => {
          return (
            <SwiperSlide>
              <div className="swiperSlide">
                <div className="swiper-avatar-div">
                  <img src={item.image} alt="user" className="swiper-image" />
                </div>
                <h5 className="center user">{item.userName}</h5>
                <div className="center">
                <h5 className="user">{item.role}</h5>
                {item.companyLogo ?
                 <img
                 src={item.companyLogo}
                 alt="companylogo"
                 className="company "
               />:''}
               
                </div>
               
                <Scrollbars style={{ width: 500, height: 350  }}>
                  <p className="user-text">
                    <span>{item.text} 
                      {item.subText ?
                      <>
                        <a className="link">Tell us</a>
                        {item.subText}
                       </> :''}
                    </span>
                  </p>
                  
                </Scrollbars>
              </div>
            </SwiperSlide>
          );
        })}

      </Swiper>
      <div className="swiper-btns flex justify-content-center">
          <button className="swipe-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 400.004 400.004" class="_1q-aMK8es1fS7FipYBokbZ swipe-avg "><path d="M382.688 182.686H59.116l77.209-77.214c6.764-6.76 6.764-17.726 0-24.485-6.764-6.764-17.73-6.764-24.484 0L5.073 187.757c-6.764 6.76-6.764 17.727 0 24.485l106.768 106.775a17.252 17.252 0 0012.242 5.072c4.43 0 8.861-1.689 12.242-5.072 6.764-6.76 6.764-17.726 0-24.484l-77.209-77.218h323.572c9.562 0 17.316-7.753 17.316-17.315 0-9.562-7.753-17.314-17.316-17.314z"></path></svg>

          </button>
          <button className="swipe-btn swipe-btn-next">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 268.832 268.832" class="_1q-aMK8es1fS7FipYBokbZ swipe-avg  "><path d="M265.171 125.577l-80-80c-4.881-4.881-12.797-4.881-17.678 0-4.882 4.882-4.882 12.796 0 17.678l58.661 58.661H12.5c-6.903 0-12.5 5.597-12.5 12.5 0 6.902 5.597 12.5 12.5 12.5h213.654l-58.659 58.661c-4.882 4.882-4.882 12.796 0 17.678 2.44 2.439 5.64 3.661 8.839 3.661s6.398-1.222 8.839-3.661l79.998-80c4.882-4.882 4.882-12.796 0-17.678z"></path></svg>

          </button>
      </div>
      <div className="   flex justify-content-center">
        <button className="btn-ternary btn-testimonial " >Read More Testimonials</button>
      </div>
      </div>
    </section>
  );
};

export default Testimonial;
