import tutorMale from "@/assets/institute/tutorMale.png";
import tutorFemale from "@/assets/institute/tutorFemale.png";
import MentorsCard from "./MentorsCard";
import Link from "next/link";

const mentors = [
  {
    id: 1,
    image: tutorMale,
    name: "Imran Ali Dinar",
    title: "Software Engineer",
  },
  {
    id: 2,
    image: tutorFemale,
    name: "Imran Ali Dinar",
    title: "Software Engineer",
  },
  {
    id: 3,
    image: tutorMale,
    name: "Imran Ali Dinar",
    title: "Software Engineer",
  },
  {
    id: 4,
    image: tutorFemale,
    name: "Imran Ali Dinar",
    title: "Software Engineer",
  },
  {
    id: 5,
    image: tutorMale,
    name: "Imran Ali Dinar",
    title: "Software Engineer",
  },
  {
    id: 6,
    image: tutorFemale,
    name: "Imran Ali Dinar",
    title: "Software Engineer",
  },
  {
    id: 7,
    image: tutorMale,
    name: "Imran Ali Dinar",
    title: "Software Engineer",
  },
  {
    id: 8,
    image: tutorFemale,
    name: "Imran Ali Dinar",
    title: "Software Engineer",
  },
];

const TutorAndMentors = () => {
  return (
    <div className="container pt-24">
      <h1 className="text-heading-text text-3xl font-bold mb-12">
        Tutor And Mentors
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mentors?.map((mentor, idx) => (
          <Link key={idx} href="/teacher/profile">
            <MentorsCard key={idx} mentor={mentor} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TutorAndMentors;
