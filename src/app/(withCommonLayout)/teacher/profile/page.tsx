import Image from "next/image";
import CourseSection from "@/components/CourseSection/CourseSection";
import teacher from "@/assets/institute/teacherImage.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceCard {
  company: string;
  date: string;
  designation: string;
}

const experiences: ExperienceCard[] = [
  {
    company: "XYZ Tech Solutions",
    date: "Jan 2012-Dec 2014",
    designation: "Junior Web Developer",
  },
  {
    company: "Web Innovators Ltd.",
    date: "Jan 2015-Aug 2017",
    designation: "Front-End Developer",
  },
  {
    company: "Tech Giants Inc.",
    date: "Sep 2017-Mar 2020",
    designation: "Senior Full-Stack Developer",
  },
  {
    company: "Creative IT Institute",
    date: "Apr 2020-Present",
    designation: "Lead Web Development Instructor",
  },
];

export default function TeacherProfile() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary-semi-bold h-52"></header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <Image
            src={teacher}
            alt="teacher Image"
            width={200}
            height={200}
            className="rounded-full max-w-348 max-h-48 -mt-32 shadow"
          />
        </div>
        {/* Institute Info */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-heading-text">
            Muhammad Ibrahimovic
          </h1>
          <p className="text-heading-text/80 text-lg">
            Web Developer & specialist
          </p>
        </div>

        {/* Statistics */}
        <div className="flex justify-center gap-12 py-6">
          <div className="text-center">
            <h2 className="text-2xl text-heading-text font-bold">08</h2>
            <p className="text-base text-gray-600">Experience</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl text-heading-text font-bold">10+</h2>
            <p className="text-base text-gray-600">Courses</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl text-heading-text font-bold">1,225</h2>
            <p className="text-base text-gray-600">Reviews</p>
          </div>
        </div>

        {/* Description */}
        <div className="container text-gray-600 space-y-4 text-justify">
          <p>
            Muhammad Imrahimovic is a seasoned web development expert with over
            10 years of experience in the field. He has built a stellar
            reputation for his proficiency in various web technologies,
            consistently delivering high-quality projects and training thousands
            of students worldwide. His expertise ranges from front-end design to
            back-end development, making him a versatile professional in the
            industry.
          </p>
        </div>

        {/* experience */}
        <div className="container pt-8">
          <h1 className="text-heading-text text-3xl font-bold mb-12">
            Experience
          </h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {experiences.map((experience, index) => (
              <Card key={index} className="bg-white text-center">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-[#464152]">
                    {experience.company}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-base text-[#726986]">
                  <div>Date - {experience.date}</div>
                  <div>Designation - {experience.designation}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sections */}
        <CourseSection />
      </main>
    </div>
  );
}
