const ContactInformatoin = () => {
  return (
    <div className="container pt-24">
      <h1 className="text-heading-text text-3xl font-bold mb-12">
        Contact Information
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-2 text-primary font-semibold text-2xl">
            Head Office [Main Campus, Dhaka]
          </div>
          <div className="text-base text-[#667085] text-muted-foreground ">
            Momtaz Plaza (4th Floor)
            <br />
            House#7, Road#4, Dhanmondi,
            <br />
            Dhaka 1205, Bangladesh
          </div>
        </div>

        <div className="p-4 space-y-2">
          <div className="flex items-center gap-2 text-primary font-semibold text-2xl">
            Phone Number
          </div>
          <div className="text-base text-[#667085] text-muted-foreground space-y-1">
            <div>+880 177 47548</div>
            <div>+880 177 47548</div>
            <div>+880 177 47548</div>
            <div>+880 177 47548</div>
          </div>
        </div>

        <div className="p-4 space-y-2">
          <div className="flex items-center gap-2 text-primary font-semibold text-2xl">
            Office Visit Time
          </div>
          <div className="text-base text-[#667085] text-muted-foreground">
            Saturday - Friday
            <br />
            9:00 am to 6:00 pm
          </div>
        </div>

        <div className="p-4 space-y-2">
          <div className="flex items-center gap-2 text-primary font-semibold text-2xl">
            E-Mail
          </div>
          <div className="text-base text-[#667085] text-muted-foreground pl-6">
            <a
              href="mailto:info@creativeitinstitute.com"
              className="hover:underline"
            >
              info@creativeitinstitute.com
            </a>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default ContactInformatoin;
