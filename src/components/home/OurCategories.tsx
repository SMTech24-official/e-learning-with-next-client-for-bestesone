"use client";

import SectionStarter from "./SectionStarter";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components here.
import dataScience from "@/assets/categoryImage/dataScience.png";
import economy from "@/assets/categoryImage/economy.png";
import robotics from "@/assets/categoryImage/robotics.png";
import business from "@/assets/categoryImage/business.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiperStyle.css";
import { Navigation } from "swiper/modules"; // Import necessary Swiper modules.
import CategoryCard from "./CategoryCard/CategoryCard";
import type { Swiper as SwiperInstance } from "swiper/types"; // Use type aliasing to avoid name collision.

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
  const [, setSwiperRef] = useState<SwiperInstance | null>(null); // Use SwiperInstance for typing.

  return (
    <div className="container mb-[100px]">
      <SectionStarter
        heading={"Our Categories"}
        title={"Explore Our Categories: Find Exactly What You're Looking For"}
      />
      <div className="relative mt-12">
        <Swiper
          onSwiper={setSwiperRef} // Correctly type Swiper instance.
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
