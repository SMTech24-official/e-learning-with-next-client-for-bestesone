const Overview = () => {
  return (
    <div className="bg-primary">
      <div className="container">
        <div className=" text-white py-10 md:h-64 flex flex-col gap-20 sm:flex-row md:justify-around items-center">
          <div className="flex flex-col items-center">
            <p className="text-4xl sm:text-xl lg:text-4xl font-bold mb-2 md:items-start">100,000+</p>
            <p className="text-xl sm:text-sm lg:text-xl font-extralight">students worldwide</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-4xl sm:text-xl lg:text-4xl font-bold mb-2">200,000+</p>
            <p className="text-xl sm:text-sm lg:text-xl font-extralight">Total Courses Views</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-4xl sm:text-xl lg:text-4xl font-bold mb-2">5,000+</p>
            <p className="text-xl sm:text-sm lg:text-xl font-extralight">Five-star courses Review</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-4xl sm:text-xl lg:text-4xl font-bold mb-2">5,000+</p>
            <p className="text-xl sm:text-sm lg:text-xl font-extralight">Student Community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
