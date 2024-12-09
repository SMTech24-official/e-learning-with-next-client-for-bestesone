/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Card, CardContent, CardHeader } from "../ui/card";
import paypal from "@/assets/payments/PayPal-2.png";
import Image from "next/image";
import MyFormInput from "../ui/MyForm/MyFormInput/MyFormInput";
import MyFormWrapper from "../ui/MyForm/MyFormWrapper/MyFormWrapper";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import Link from "next/link";

const validationSchema = z.object({
  card_number: z.any({
    required_error: "Card Number is required",
  }),
  card_date: z.string({
    required_error: "Date is required",
  }),
  cvc: z.any(),
  card_holder_name: z
    .string({
      required_error: "Full name is required",
    })
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot exceed 50 characters"),
});

const PaymentCardForm = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Card className="max-w-lg mx-auto mt-5 border border-[#98A2B3] rounded-3xl">
      <CardHeader>
        <div className="flex flex-row justify-center items-center">
          <Image
            src={paypal}
            alt="payment"
            className="border px-3 py-1 w-auto h-[60px] rounded"
          />
          <h1 className="text-[#667085} ml-2">Paypal</h1>
        </div>
      </CardHeader>
      <CardContent>
        {/* <MyFormInput name="Card Number" placeHolder="Enter Your Number" label="card-number" /> */}
        <MyFormWrapper
          className={"flex flex-col gap-5 w-full "}
          onSubmit={handleSubmit}
          resolver={zodResolver(validationSchema)}
        >
          <div className="w-full">
            <MyFormInput
              name={"card_number"}
              label="Card Number"
              type="number"
              placeHolder="Enter Your Number"
            />
          </div>
          <div className="w-full">
            <MyFormInput
              name={"card_date"}
              label="Card Date"
              placeHolder="MM/YY"
            />
          </div>
          <div className="w-full">
            <MyFormInput
              name={"cvc"}
              type="number"
              label="CVC"
              placeHolder="CVC"
            />
          </div>
          <div className="w-full">
            <MyFormInput
              name={"card_holder_name"}
              label="Card Holder Name"
              placeHolder="Enter Your Name"
            />
          </div>
          <div className="w-full flex gap-2">
            <MyFormInput type="checkbox" name={"checkbox"} />
            <p>
              By checking this pay button you agree to our Terms of
              Service which is limited to facilitating your payment to Learn
              with us
            </p>
          </div>

          <Link href={"/payment/payment-success"}>
            <Button
              className=" w-full py-3 rounded-lg bg-primary text-white text-base font-normal leading-6"
              type="submit"
            >
              Submit
            </Button>
          </Link>
        </MyFormWrapper>
      </CardContent>
    </Card>
  );
};

export default PaymentCardForm;
