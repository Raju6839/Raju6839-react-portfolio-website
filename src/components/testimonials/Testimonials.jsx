import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

//import swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
// import "swper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "This was such a pleasure to follow. You explain a lot of the HTML and general structure of the code Learned a lot about,CSS conventions and styling as well  followed the entire tutorial and now I'm excited to learn more and build upon andmake it my own Thank you for the, amazing ,tutorial",
  },
  {
    avatar: AVTR2,
    name: "Sundar Pichai",
    review:
      "Hello The user-select property specifies whether the text of an element can be selected. In web browsers, if you double-click on some text it will be selected/highlighted. This property can be used to prevent this. Default value: auto.",
  },
  {
    avatar: AVTR3,
    name: "Mark Zuckerberg",
    review:
      "This was such a pleasure to follow. You explain a lot of the HTML and general structure of the code Learned a lot about,CSS conventions and styling as well  followed the entire tutorial and now I'm excited to learn more and build upon andmake it my own Thank you for the, amazing ,tutorial",
  },
  {
    avatar: AVTR4,
    name: "Shatta wale",
    review:
      "This was such a pleasure to follow. You explain a lot of the HTML and general structure of the code Learned a lot about,CSS conventions and styling as well  followed the entire tutorial and now I'm excited to learn more and build upon andmake it my own Thank you for the, amazing ,tutorial",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // {/* install swiper modules */}
        modules={[Pagination]} spaceBetween={40}
        slidePerView={1}
        pagination={{ clickable: true }}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
