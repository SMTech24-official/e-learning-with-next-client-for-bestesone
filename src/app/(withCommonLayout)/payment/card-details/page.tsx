"use client"
import dynamic from "next/dynamic";
const PaymentCardForm = dynamic(() => import("@/components/payment/PaymentCardDetails"), { ssr: false });


const PaymentCardDetails = () => {
  return (
    <div className="container min-h-screen mx-auto">
      <PaymentCardForm />
    </div>
  );
};

export default PaymentCardDetails;
