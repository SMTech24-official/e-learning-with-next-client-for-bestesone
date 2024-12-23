/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import PersonalizedStepsWrapper from "@/components/PersonalizedSteps/PersonalizedStepsWrapper";
import TopicSelector from "@/components/PersonalizedSteps/TopicSelector";
import { Button } from "@/components/ui/button";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { useRegisterMutation } from "@/redux/features/authSlice/authApi";
import {
  clearRegistrationData,
  setUser,
} from "@/redux/features/authSlice/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { topicSchema } from "@/schema/topicSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const PersonalizeStepTwo = () => {
  const registrationData = useAppSelector(
    (state: RootState) => state.auth.registrationData
  );
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();

  const onSubmit = async (data: any) => {
    const finalData = {
      ...registrationData,
      student: {
        ...registrationData?.student,
        interest: data.interest,
      },
    };
    console.log(finalData);
    try {
      try {
        const res = await register(finalData).unwrap();
        dispatch(clearRegistrationData());
        dispatch(setUser(res?.data.token));
        console.log(res.data.token);
        toast.success("Registration successful!");
        router.push("/");
      } catch (error) {
        console.error("Registration failed:", error);
      }
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error((error as { message: string })?.message);
    }
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
            {isLoading ? "Registering..." : "Get Started"}
          </Button>
        </MyFormWrapper>
      </PersonalizedStepsWrapper>
    </>
  );
};

export default PersonalizeStepTwo;
