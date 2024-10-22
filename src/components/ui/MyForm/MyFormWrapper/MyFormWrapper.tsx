/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormProvider, useForm } from "react-hook-form";
import cn from "../../../../utils/cn";

const MyFormWrapper = ({
  onSubmit,
  className,
  children,
  defaultValues,
  resolver,
}: {
  onSubmit: (data: any) => void;
  className?: string;
  children: React.ReactNode;
  defaultValues?: any;
  resolver?: import("react-hook-form").Resolver<any, any>;
}) => {
  // Change formConfig type to allow dynamic properties
  const formConfig: Record<string, any> = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
  const { handleSubmit, reset } = methods;

  const submit = (data: any) => {
    onSubmit(data);
    // reset();
  };

  return (
    <FormProvider {...methods}>
      <form className={cn("", className)} onSubmit={handleSubmit(submit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default MyFormWrapper;
