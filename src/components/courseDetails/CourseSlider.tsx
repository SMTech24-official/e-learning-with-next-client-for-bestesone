"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import CourseCard from "../home/CourseCard/CourseCard";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

interface Course {
  id: number;
  coverImage: string;
  title: string;
  description: string;
  authorImage: string;
  authorName: string;
  rating: number;
  date: string;
  seats: number;
  price: number;
}

interface CourseSliderProps {
  courses: Course[];
}

export default function CourseSlider({ courses }: CourseSliderProps) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="relative mb-12">
      {/* Slider Heading */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-heading-text font-bold text-4xl">Related Course</h1>
        <div className="flex gap-2">
          <button
            ref={prevRef}
            className="bg-white text-primary p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition"
          >
            <IoIosArrowBack />
          </button>
          <button
            ref={nextRef}
            className="bg-white text-primary p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        centeredSlides={false}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 14,
            centeredSlides: false,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 14,
          },
        }}
        className="mySwiper"
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <div className="p-2">
              <CourseCard {...course} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
