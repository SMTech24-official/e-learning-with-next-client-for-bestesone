const SectionStarter = ({ heading, title } : {heading: string, title: string})=> {
  return (
    <div className="container">
      <h3 className="text-center text-3xl sm:text-5xl font-bold leading-[64px] mt-4 sm:mt-16 sm:mb-4">
        {heading}
      </h3>
      <p className="text-center text-[#667085] text-base font-normal leading-6 mb-4 md:mb-10">
        {title}
      </p>
    </div>
  );
};

export default SectionStarter;
