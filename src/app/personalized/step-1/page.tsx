/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import PersonalizedStepsWrapper from "@/components/PersonalizedSteps/PersonalizedStepsWrapper";
import { Button } from "@/components/ui/my-ui/button";
import MyFormRadioGroup from "@/components/ui/MyForm/MyFormRadioGroup/MyFormRadioGroup";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { z } from "zod";

const PersonalizeStepOne = () => {
  const router = useRouter();
  const onSubmit = (data: any) => {
    console.log("PersonalizeStepOne data:", data);
    router.push("/personalized/step-2");
  };

  // Define radio button options
  const schoolYearOptions = [
    { value: "school", label: "School" },
    { value: "collage", label: "Collage" },
    { value: "university", label: "University" },
    { value: "institute", label: "Institute" },
    { value: "training center", label: "Training Center" },
  ];

  const educationSchema = z.object({
    education: z.string().min(1, { message: "Please select your education" }),
  });

  return (
    <>
      <PersonalizedStepsWrapper
        heading="Let's Personalize Your Learning Journey!"
        title="Answer quick questions to help us create the best learning experience for you."
      >
        {/* Radio Buttons */}
        <MyFormWrapper
          resolver={zodResolver(educationSchema)}
          onSubmit={onSubmit}
          className="space-y-3"
        >
          <MyFormRadioGroup
            name="education"
            label="What education are you currently in?"
            options={schoolYearOptions}
          />

          {/* Next Button */}
          <Button type="submit" className="w-full">
            Next
          </Button>
        </MyFormWrapper>
      </PersonalizedStepsWrapper>
    </>
  );
};

export default PersonalizeStepOne;
