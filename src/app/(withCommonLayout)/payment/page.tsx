import PaymentDetailsCard from "@/components/payment/PaymentDetailsCard";
import PaymentMethodCard from "@/components/payment/PaymentMethodCard";
import React from "react";

const paymentPage = () => {
  return (
    <div className="container min-h-screen grid grid-cols-6 gap-5 p-5">
      <div className="col-span-6 md:col-span-4">
        <PaymentDetailsCard />
      </div>
      <div className="col-span-6 md:col-span-2">
        <PaymentMethodCard />
      </div>
    </div>
  );
};

export default paymentPage;
