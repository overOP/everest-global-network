import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { universities } from "../../data/StudyAbroad/universitesdata";

const UniversitySwiper = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-3xl font-bold text-center mb-12 text-blue-400"
          style={{ fontFamily: "'Montserrat',sans-serif" }}
        >
          Associated Universities
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {universities.map((uni) => (
            <SwiperSlide key={uni.id}>
              <div className="relative rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
                <img
                  src={uni.image}
                  alt={uni.name}
                  className="h-72 w-full object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full p-5 bg-black opacity-70 text-white ">
                  <h3 className="text-lg font-bold">{uni.name}</h3>
                  <p className="text-sm">{uni.country}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default UniversitySwiper;
