import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "./Slider.css";

function Slider({ slides }) {
  const swiperRef = useRef(null);

  // Función para igualar alturas (si la necesitas)
  const equalizeHeights = () => {
    if (!swiperRef.current) return;
    const cardElements = swiperRef.current.querySelectorAll(".card");
    let maxHeight = 0;
    cardElements.forEach((card) => {
      card.style.height = "auto";
    });
    cardElements.forEach((card) => {
      if (card.offsetHeight > maxHeight) {
        maxHeight = card.offsetHeight;
      }
    });
    cardElements.forEach((card) => {
      card.style.height = `${maxHeight}px`;
    });
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination],
        slidesPerView: 1.1,
        slidesPerGroup: 1,
        spaceBetween: 20,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints: {
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            slidesPerGroup: 4,
            spaceBetween: 50,
          },
        },
      });

      equalizeHeights();
      window.addEventListener("resize", equalizeHeights);

      return () => {
        window.removeEventListener("resize", equalizeHeights);
        swiper.destroy();
      };
    }
  }, [slides]);

  return (
    <section className="bg-transparent w-full py-8">
      <div className="max-w-7xl mx-auto md:py-20 text-white">
        <div className="swiper max-w-7xl w-full py-10" ref={swiperRef}>
          <div className="swiper-wrapper">
            {slides.map((item, index) => (
              <div className="swiper-slide" key={index}>
                <div className="card w-[310px] flex flex-col bg-black text-white rounded-lg border-[0.25px] border-white py-[27.5px] px-5">
                  <div className="flex flex-col">
                    <img
                      src={item.icon.src}
                      alt={item.title}
                      className="w-[28px] mb-3"
                    />
                    <h3
                      className="font-inter font-semibold md:text-xl text-base mb-2 max-w-[270px]"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {item.title}
                    </h3>
                    <p className="font-inter text-sm text-justify max-w-[270px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contenedor de paginación y navegación */}
          <div className="flex relative max-w-[80px] left-[70%] mt-[16px] right-0 h-[40px]">
            {/* Botón Prev: Usamos el mismo SVG volteado */}
            <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer">
              <svg
                width="36"
                height="32"
                viewBox="0 0 36 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: "scaleX(-1)" }}
              >
                <rect width="36" height="32" rx="4" fill="#F2E900" />
                <path
                  d="M16 11.3334L20.6667 16L16 20.6667"
                  stroke="#212121"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Botón Next */}
            <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer">
              <svg
                width="36"
                height="32"
                viewBox="0 0 36 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="36" height="32" rx="4" fill="#F2E900" />
                <path
                  d="M16 11.3334L20.6667 16L16 20.6667"
                  stroke="#212121"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Paginación (opcional) */}
            <div className="swiper-pagination mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
