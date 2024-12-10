import PersonalizedStepsWrapper from "@/components/PersonalizedSteps/PersonalizedStepsWrapper";
import { Button } from "@/components/ui/my-ui/button";
import React from "react";

const PersonalizeStepOne = () => {
  return (
    <>
      <PersonalizedStepsWrapper
        heading="Let's Personalize Your Learning Journey!"
        title="Answer quick questions to help us create the best learning experience for you."
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          What school year are you currently in ?
        </h2>

        {/* Radio Buttons */}
        <form className="space-y-3">
          <div className="flex items-center">
            <input
              type="radio"
              id="javascript"
              name="language"
              value="javascript"
              className="mr-2"
            />
            <label htmlFor="javascript" className="text-gray-700">
              School
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="python"
              name="language"
              value="python"
              className="mr-2"
            />
            <label htmlFor="python" className="text-gray-700">
              Collage
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="java"
              name="language"
              value="java"
              className="mr-2"
            />
            <label htmlFor="java" className="text-gray-700">
              University
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="csharp"
              name="language"
              value="csharp"
              className="mr-2"
            />
            <label htmlFor="csharp" className="text-gray-700">
              Institute
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="other"
              name="language"
              value="other"
              className="mr-2"
            />
            <label htmlFor="other" className="text-gray-700">
              Training Center
            </label>
          </div>

          {/* Next Button */}
          <Button type="submit" className="w-full">
            Next
          </Button>
        </form>
      </PersonalizedStepsWrapper>
    </>
  );
};

export default PersonalizeStepOne;
