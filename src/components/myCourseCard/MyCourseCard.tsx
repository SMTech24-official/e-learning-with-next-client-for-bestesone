import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";
import Image from "next/image";
import courseImage from "@/assets/cardImages/courseCard/course-card-cover.png";
import institute from "@/assets/cardImages/courseCard/author-image.png";

export default function MyCourseCard() {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden shadow xs:shadow-none p-3 rounded-lg">
      {/* Left side with image */}
      <Image
        src={courseImage}
        alt="Course instructor"
        className="rounded-2xl w-full md:max-w-sm object-fill"
      />

      {/* Right side with details */}
      <div className="flex-1 p-6">
        <div className="space-y-4">
          <span className="text-xs bg-primary p-2 text-white rounded-full">
            Completed
          </span>
          <h3 className="text-base sm:text-2xl font-medium">
            HTML, CSS, and Javascript for Web Developers Specialization
          </h3>

          <div className="flex items-center gap-4 text-muted-foreground">
            <Image
              className="h-8 w-8 rounded-full border-2 border-primary"
              src={institute}
              alt="institute image"
            />
            <span className="text-xs sm:text-base font-medium text-heading-text">WebDev Institute</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>01 Apr - 30 Sep</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Seat - 40</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col xs:flex-row gap-3 mt-6">
          <Button
            className="hover:bg-primary hover:text-white"
            variant="outline"
            size="sm"
          >
            View Details
          </Button>
          <Button
            className="hover:bg-primary hover:text-white"
            variant="outline"
            size="sm"
          >
            Course Refund
          </Button>
        </div>
      </div>
    </div>
  );
}
