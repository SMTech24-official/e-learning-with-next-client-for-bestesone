"use client";
import SectionStarter from "./SectionStarter";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import dataScience from "@/assets/categoryImage/data-science.png";
import economy from "@/assets/categoryImage/economy.png";
import robotics from "@/assets/categoryImage/robotics.png";
import business from "@/assets/categoryImage/business.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiperStyle.css";
import { Navigation } from "swiper/modules";
import CategoryCard from "./CategoryCard/CategoryCard";

const mockCategory = [
  {
    id: 1,
    image: dataScience,
    category: "Data Science",
    course: "16",
  },
  {
    id: 2,
    image: business,
    category: "Business",
    course: "106",
  },
  {
    id: 3,
    image: robotics,
    category: "Robotics",
    course: "45",
  },
  {
    id: 4,
    image: economy,
    category: "Economy",
    course: "16",
  },
  {
    id: 5,
    image: dataScience,
    category: "Data Science",
    course: "16",
  },
  {
    id: 6,
    image: business,
    category: "Business",
    course: "106",
  },
  {
    id: 7,
    image: robotics,
    category: "Robotics",
    course: "45",
  },
  {
    id: 8,
    image: economy,
    category: "Economy",
    course: "16",
  },
];

const OurCategories = () => {
  const [setSwiperRef] = useState(null);

  return (
    <div className="container mb-[100px]">
      <SectionStarter
        heading={"Our Categories"}
        title={"Explore Our Categories: Find Exactly What You're Looking For"}
      />
      <div className="relative mt-12">
        <Swiper
          onSwiper={setSwiperRef}
          centeredSlides={false}
          breakpoints={{
            540: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2, 
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 14, 
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 14, 
            },
          }}
          spaceBetween={14}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {mockCategory.map((category) => (
            <SwiperSlide key={category.id}>
              <CategoryCard
                key={category.id}
                image={category.image}
                category={category.category}
                course={category.course}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurCategories;
