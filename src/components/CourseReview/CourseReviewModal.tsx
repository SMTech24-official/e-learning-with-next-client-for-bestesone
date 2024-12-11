/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/my-ui/button";
import MyFormWrapper from "../ui/MyForm/MyFormWrapper/MyFormWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import MyFormTextArea from "../ui/MyForm/MyFormTextArea/MyFormTextArea";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const validationSchema = z.object({
  review: z.any(),
});

interface ToggleModal {
  toggleModal: () => void;
}
const CourseReviewModal = ({ toggleModal }: ToggleModal) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  const getRatingLabel = (rating: number) => {
    switch (rating) {
      case 5:
        return "Extremely Helpful";
      case 4:
        return "Very Helpful";
      case 3:
        return "Helpful";
      case 2:
        return "Somewhat Helpful";
      case 1:
        return "Not Helpful";
      default:
        return "";
    }
  };

  return (
    <Dialog open>
      <DialogContent className="sm:max-w-[600px] p-16">
        <div className="w-full space-y-4 py-4 flex flex-col text-2xl font-bold text-heading-text justify-center items-center">
          <DialogTitle className="text-2xl font-semibold">
            Do You Find this Course Helpful?
          </DialogTitle>
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-base text-[#726986] font-normal mb-2">
              Share your experience with ratings.
            </p>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="focus:outline-none"
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(star)}
                >
                  <Star
                    className={cn(
                      "w-10 h-10 text-[#EAAA08] transition-colors",
                      star <= (hoveredRating || rating)
                        ? "fill-[#EAAA08] text-[#EAAA08]"
                        : "text-gray-300"
                    )}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="mt-2 text-sm font-normal text-[#726986] text-center">
                {getRatingLabel(rating)}
              </p>
            )}
            <MyFormWrapper
              className={"flex flex-col gap-5 w-full mt-4 "}
              onSubmit={handleSubmit}
              resolver={zodResolver(validationSchema)}
            >
              <div className="w-full">
                <label htmlFor="review" className="text-base font-normal">
                  Add additional reviews (Optional)
                </label>
                <MyFormTextArea
                  name={"review"}
                  placeHolder="Search your location"
                  inputClassName="w-full"
                />
              </div>
              <Button onClick={() => toggleModal()} variant="default">
                Submit Review
              </Button>
            </MyFormWrapper>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseReviewModal;
