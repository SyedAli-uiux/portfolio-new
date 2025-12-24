import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Dynamically import all images from portfolio-images folder
const images = import.meta.glob("../portfolio-images/*.{jpg,png,jpeg}", { eager: true });
const imageList = Object.values(images).map((img) => img.default);

function Portfolio() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides(imageList);

    
  }, []);

  return (
    <section id="portfoli" className="my-5 py-5 bg-text" data-text="04">
      {/* <div className="section-header my-5" data-aos="fade-up">
        <div className="row justify-content-center g-5">
          <div className="col-lg-4">
            <span className="text-muted text-uppercase">some of my recent works</span>
            <h2 className="display-1 txt-fx slide-up">Portfolio</h2>
          </div>
          <div className="col-lg-4" data-aos="fade-up">
            <p>
              Highlighting my design style, problem-solving approach, and storytelling skills.
            </p>
            <a href="#gallary" className="btn btn-dark px-5 py-4">View All</a>
          </div>
        </div>
      </div> */}

      {/* Swiper Carousel
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
        className="portfolio-carousel py-4"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="image-holder">
              <img src={src} className="img-fluid portfolio-img" alt={`portfolio-${index}`} />
            </div>
            <div className="caption d-flex justify-content-between">
              <div className="title">Project {index + 1}</div>
              <a href="#" className={`image-format ${index % 2 === 0 ? "bg-orange" : "bg-blue"}`}>
                {index % 2 === 0 ? "svg" : "png"}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </section>
  );
}

export default Portfolio;
