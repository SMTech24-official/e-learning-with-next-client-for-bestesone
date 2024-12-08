import PersonalizedStepsWrapper from "@/components/PersonalizedSteps/PersonalizedStepsWrapper";
import TopicSelector from "@/components/PersonalizedSteps/TopicSelector";
import React from "react";

const PersonalizeStepTwo = () => {
  return (
    <>
      <PersonalizedStepsWrapper
        heading="Let's Personalize Your Learning Journey!"
        title="Answer quick questions to help us create the best learning experience for you."
        contentBoxClassName="px-8 py-6 md:px-8 md:py-6"
      >
        <h2 className="text-2xl font-semibold text-center mb-8">
          What would you like to learn about?
        </h2>
        <TopicSelector />
      </PersonalizedStepsWrapper>
    </>
  );
};

export default PersonalizeStepTwo;
