import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, GraduationCap, Users, Briefcase } from "lucide-react";

const BuyNowCard = () => {
  return (
    <Card className="w-full p-4 sm:py-9 sm:px-3 rounded-[20px] shadow">
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-4xl font-bold text-heading-text">$ 850.00 USD</p>
            <p className="text-sm text-muted-foreground">
              Provide most popular courses that your want to do and lets start
              the course for the most simply way in here
            </p>
          </div>
          <Button className="w-full">
            Enroll Now
          </Button>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span>Course Duration :</span>
              <span className="ml-auto font-medium">06 Month</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span>Available Seat :</span>
              <span className="ml-auto font-medium">25</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <GraduationCap className="h-5 w-5 text-muted-foreground" />
              <span>No. of Classes :</span>
              <span className="ml-auto font-medium">42 Classes</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <span>Class Per Week :</span>
              <span className="ml-auto font-medium">
                3 Days (Fri, Sat, Thu)
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span>Class Duration :</span>
              <span className="ml-auto font-medium">11am - 03 P</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <GraduationCap className="h-5 w-5 text-muted-foreground" />
              <span>Certificate of Completion</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Briefcase className="h-5 w-5 text-muted-foreground" />
              <span>Jobs / Internship Facility</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BuyNowCard;
