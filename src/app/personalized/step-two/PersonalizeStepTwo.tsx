/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import PersonalizedStepsWrapper from "@/components/PersonalizedSteps/PersonalizedStepsWrapper";
import TopicSelector from "@/components/PersonalizedSteps/TopicSelector";
import { Button } from "@/components/ui/button";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { topicSchema } from "@/schema/topicSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const PersonalizeStepTwo = () => {
  const router = useRouter();
  const onSubmit = (data: any) => {
    router.push("/");
    console.log(data);
  };
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
        <MyFormWrapper resolver={zodResolver(topicSchema)} onSubmit={onSubmit}>
          <TopicSelector />
          <Button variant={"default"}>
            Get Started
          </Button>
        </MyFormWrapper>
      </PersonalizedStepsWrapper>
    </>
  );
};

export default PersonalizeStepTwo;
