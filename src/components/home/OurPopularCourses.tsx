"use client";

import { Button } from "../ui/button";
import CourseCard from "./CourseCard/CourseCard";
import SectionStarter from "./SectionStarter";

const demoCourseCard = [
  {
    coverImage: "https://i.ibb.co.com/0X7d9cd/course-card-cover.png",
    title: "Mastering JavaScript: The Complete Guide",
    description:
      "Learn JavaScript from scratch and build dynamic, interactive web applications. Perfect for beginners and intermediate learners.",
    authorImage: "https://i.ibb.co.com/7nph2DF/author-image.png",
    authorName: "Web IT Institute",
    rating: 4.8,
    date: "20 Apr - 31 Sep",
    seats: 30,
    price: 250,
  },
  {
    coverImage: "https://i.ibb.co.com/0X7d9cd/course-card-cover.png",
    title: "Mastering JavaScript: The Complete Guide",
    description:
      "Learn JavaScript from scratch and build dynamic, interactive web applications. Perfect for beginners and intermediate learners.",
    authorImage: "https://i.ibb.co.com/7nph2DF/author-image.png",
    authorName: "John Doe",
    rating: 4.8,
    date: "2024-12-15",
    seats: 30,
    price: 49.99,
  },
  {
    coverImage: "https://i.ibb.co.com/0X7d9cd/course-card-cover.png",
    title: "Mastering JavaScript: The Complete Guide",
    description:
      "Learn JavaScript from scratch and build dynamic, interactive web applications. Perfect for beginners and intermediate learners.",
    authorImage: "https://i.ibb.co.com/7nph2DF/author-image.png",
    authorName: "John Doe",
    rating: 4.8,
    date: "2024-12-15",
    seats: 30,
    price: 49.99,
  },
  {
    coverImage: "https://i.ibb.co.com/0X7d9cd/course-card-cover.png",
    title: "Mastering JavaScript: The Complete Guide",
    description:
      "Learn JavaScript from scratch and build dynamic, interactive web applications. Perfect for beginners and intermediate learners.",
    authorImage: "https://i.ibb.co.com/7nph2DF/author-image.png",
    authorName: "John Doe",
    rating: 4.8,
    date: "2024-12-15",
    seats: 30,
    price: 49.99,
  },
  {
    coverImage: "https://i.ibb.co.com/0X7d9cd/course-card-cover.png",
    title: "Mastering JavaScript: The Complete Guide",
    description:
      "Learn JavaScript from scratch and build dynamic, interactive web applications. Perfect for beginners and intermediate learners.",
    authorImage: "https://i.ibb.co.com/7nph2DF/author-image.png",
    authorName: "John Doe",
    rating: 4.8,
    date: "2024-12-15",
    seats: 30,
    price: 250,
  },
  {
    coverImage: "https://i.ibb.co.com/0X7d9cd/course-card-cover.png",
    title: "Mastering JavaScript: The Complete Guide",
    description:
      "Learn JavaScript from scratch and build dynamic, interactive web applications. Perfect for beginners and intermediate learners.",
    authorImage: "https://i.ibb.co.com/7nph2DF/author-image.png",
    authorName: "John Doe",
    rating: 4.8,
    date: "2024-12-15",
    seats: 30,
    price: 49.99,
  },
  {
    coverImage: "https://i.ibb.co.com/0X7d9cd/course-card-cover.png",
    title: "Mastering JavaScript: The Complete Guide",
    description:
      "Learn JavaScript from scratch and build dynamic, interactive web applications. Perfect for beginners and intermediate learners.",
    authorImage: "https://i.ibb.co.com/7nph2DF/author-image.png",
    authorName: "John Doe",
    rating: 4.8,
    date: "2024-12-15",
    seats: 30,
    price: 49.99,
  },
  {
    coverImage: "https://i.ibb.co.com/0X7d9cd/course-card-cover.png",
    title: "Mastering JavaScript: The Complete Guide",
    description:
      "Learn JavaScript from scratch and build dynamic, interactive web applications. Perfect for beginners and intermediate learners.",
    authorImage: "https://i.ibb.co.com/7nph2DF/author-image.png",
    authorName: "John Doe",
    rating: 4.8,
    date: "2024-12-15",
    seats: 30,
    price: 49.99,
  },
  {
    coverImage: "https://i.ibb.co.com/0X7d9cd/course-card-cover.png",
    title: "Mastering JavaScript: The Complete Guide",
    description:
      "Learn JavaScript from scratch and build dynamic, interactive web applications. Perfect for beginners and intermediate learners.",
    authorImage: "https://i.ibb.co.com/7nph2DF/author-image.png",
    authorName: "John Doe",
    rating: 4.8,
    date: "2024-12-15",
    seats: 30,
    price: 49.99,
  },
  {
    coverImage: "https://i.ibb.co.com/0X7d9cd/course-card-cover.png",
    title: "Mastering JavaScript: The Complete Guide",
    description:
      "Learn JavaScript from scratch and build dynamic, interactive web applications. Perfect for beginners and intermediate learners.",
    authorImage: "https://i.ibb.co.com/7nph2DF/author-image.png",
    authorName: "John Doe",
    rating: 4.8,
    date: "2024-12-15",
    seats: 30,
    price: 49.99,
  },
  {
    coverImage: "https://i.ibb.co.com/0X7d9cd/course-card-cover.png",
    title: "Mastering JavaScript: The Complete Guide",
    description:
      "Learn JavaScript from scratch and build dynamic, interactive web applications. Perfect for beginners and intermediate learners.",
    authorImage: "https://i.ibb.co.com/7nph2DF/author-image.png",
    authorName: "John Doe",
    rating: 4.8,
    date: "2024-12-15",
    seats: 30,
    price: 49.99,
  },
];

// Wrap the component using Suspense
const OurPopularCourses = () => {
  return (
    <div className="container">
      <SectionStarter
        heading="Our Popular Courses"
        title="Discover Our Most Popular Courses: Unlock Expert Knowledge and Boost Your Skills Today"
      />

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 mb-[66px]">
        {demoCourseCard.map((cardData, idx) => {
          return <CourseCard key={idx} {...cardData} />;
        })}
      </div>
      <div className="w-full flex justify-center my-10">
        <Button variant={"outline"} className="">
          View All Courses
        </Button>
      </div>
    </div>
  );
};

export default OurPopularCourses;
