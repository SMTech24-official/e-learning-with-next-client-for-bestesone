import Image from "next/image";
import institute from "@/assets/institute/instituteImage.png";
import CourseSection from "@/components/CourseSection/CourseSection";
import TutorAndMentors from "@/components/TutorAndMentors/TutorAndMentors";
import ContactInformatoin from "@/components/ContactInformation/ContactInformatoin";

export default function InstituteProfile() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary-semi-bold h-52"></header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <Image
            src={institute}
            alt="Creative IT Institute"
            width={200}
            height={200}
            className="rounded-full max-w-348 max-h-48 -mt-32 shadow"
          />
        </div>
        {/* Institute Info */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-heading-text">
            Creative IT Institute
          </h1>
          <p className="text-heading-text/80 text-lg">
            Web Development, Graphic Design, UI/UX, Digital Marketing,
            <br />
            Computer Operating and Management
          </p>
        </div>

        {/* Statistics */}
        <div className="flex justify-center gap-12 py-6">
          <div className="text-center">
            <h2 className="text-2xl text-heading-text font-bold">44</h2>
            <p className="text-base text-gray-600">Courses</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl text-heading-text font-bold">34,570</h2>
            <p className="text-base text-gray-600">Total Students</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl text-heading-text font-bold">5,785</h2>
            <p className="text-base text-gray-600">Reviews</p>
          </div>
        </div>

        {/* Description */}
        <div className="container text-gray-600 space-y-4 text-justify">
          <p>
            Creative IT is an institution committed to empowering individuals
            and communities through a world-class standard of education and
            training. Our sincere mission is to supply modern and technology
            skills, knowledge, and resources that enable students to find new
            meaning full of employment solutions. We believe every individual
            has the potential to shine and we are here to help them achieve
            their goals.
          </p>
          <p>
            As we look to the future, we remain steadfast in our commitment to
            quality knowledge and fostering a culture of lifelong learning. We
            believe the collaboration is pivotal to our success and actively
            encourage our students and we are strongly focused at helping
            achieve their goals. Each student has their own individual drive and
            we carefully direct them into their career goal and to push them to
            the maximum of reach at a peak.
          </p>
        </div>

        {/* Video Section */}
        <div className="container overflow-hidden rounded-3xl">
          <iframe
            src="https://www.youtube.com/embed/Y6aYx_KKM7A"
            title="Creative IT Institute Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-square md:aspect-video h-full rounded-3xl"
          ></iframe>
        </div>
        {/* Sections */}
        <CourseSection />
        <TutorAndMentors />
        <ContactInformatoin />
      </main>
    </div>
  );
}
