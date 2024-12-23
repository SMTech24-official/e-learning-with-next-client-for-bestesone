/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import PersonalizedStepsWrapper from "@/components/PersonalizedSteps/PersonalizedStepsWrapper";
import { Button } from "@/components/ui/my-ui/button";
import MyFormRadioGroup from "@/components/ui/MyForm/MyFormRadioGroup/MyFormRadioGroup";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { updateRegistrationData } from "@/redux/features/authSlice/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { z } from "zod";

const PersonalizeStepOne = () => {
  const registrationData = useAppSelector(
    (state: RootState) => state.auth.registrationData
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = (data: { institute: string }) => {
    dispatch(
      updateRegistrationData({
        student: {
          ...registrationData?.student,
          institute: data.institute,
        },
      })
    );
    router.push("/personalized/step-two");
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
    institute: z.string().min(1, { message: "Please select your education" }),
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
            name="institute"
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
