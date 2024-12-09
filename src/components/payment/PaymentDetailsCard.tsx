import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import courseImage from "@/assets/cardImages/courseCard/course-card-cover.png";

const PaymentDetailsCard = () => {
  return (
    <Card className="bg-primary-light">
      <CardHeader>
        <CardTitle>Payment Process</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 w-full">
        <div>
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="rounded-2xl min-w-[300px]">
              <Image
                className="rounded-2xl"
                src={courseImage}
                alt="course_image"
              />
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-heading-text">
                HTML, CSS, and Javascript for Web Developers Specialization
              </h3>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Payment Details</h3>
          <div className="flex justify-between py-1">
            <span className="text-gray-600">Course Price</span>
            <span className="font-medium">$850</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-gray-600">Discount</span>
            <span className="font-medium">$000</span>
          </div>
          <div className="flex justify-between border-t pt-2">
            <span className="font-semibold">Total Payment</span>
            <span className="font-semibold">$850</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentDetailsCard;
