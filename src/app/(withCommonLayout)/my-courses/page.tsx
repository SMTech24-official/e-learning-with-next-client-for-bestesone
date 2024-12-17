import MyCourseCard from "@/components/myCourseCard/MyCourseCard";

const MyCourses = () => {
  return (
    <div className="container p-10">
      <h1 className="text-3xl font-bold text-heading-text my-12">
        My Courses
      </h1>
      <div className="flex flex-col gap-8">
        <MyCourseCard />
        <MyCourseCard />
        <MyCourseCard />
        <MyCourseCard />
      </div>
    </div>
  );
};

export default MyCourses;
