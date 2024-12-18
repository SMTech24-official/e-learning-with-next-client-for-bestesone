/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "@/components/ui/my-ui/button";
import masterCard from "@/assets/payments/masterCard.png";
import visa from "@/assets/payments/visa.png";
import paypal from "@/assets/payments/paypal.png";
import applePay from "@/assets/payments/applePay.png";
import googlePay from "@/assets/payments/googlePay.png";
import clicq from "@/assets/payments/clicq.png";
import { useRouter } from "next/navigation";
import MyFormWrapper from "../ui/MyForm/MyFormWrapper/MyFormWrapper";
import MyFormPaymentRadioGroup from "../ui/MyForm/MyFormPaymentRadioGroup/MyFormPaymentRadioGroup";

const PaymentMethodCard = () => {
  const router = useRouter();

  const paymentOptions = [
    {
      id: "credit-card",
      label: "Credit Card",
      imageSrc: masterCard,
      altText: "Mastercard",
    },
    { id: "visa", label: "Visa", imageSrc: visa, altText: "Visa" },
    { id: "paypal", label: "PayPal", imageSrc: paypal, altText: "PayPal" },
    {
      id: "apple-pay",
      label: "Apple Pay",
      imageSrc: applePay,
      altText: "Apple Pay",
    },
    {
      id: "google-pay",
      label: "Google Pay",
      imageSrc: googlePay,
      altText: "Google Pay",
    },
    { id: "clio", label: "Clio", imageSrc: clicq, altText: "Clio" },
  ];

  const onSubmit = (data: any) => {
    console.log(data);
    router.push(`/payment/card-details`);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
      </CardHeader>
      <CardContent>
        <MyFormWrapper onSubmit={onSubmit}>
          {/* here is radio groups */}
          <MyFormPaymentRadioGroup  options={paymentOptions} />
          <Button type="submit" className="mt-6 w-full" size="lg">
            Next
          </Button>
        </MyFormWrapper>
      </CardContent>
    </Card>
  );
};

export default PaymentMethodCard;
