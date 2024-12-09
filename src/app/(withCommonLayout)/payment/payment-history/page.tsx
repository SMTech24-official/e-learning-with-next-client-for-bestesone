import PaymentSuccessCard from "@/components/payment/PaymentSuccessCard";
import { ImCheckmark } from "react-icons/im";
<ImCheckmark />;

const PaymentHistory = () => {
  const payments = [
    { id: 1, date: "06 th March", amount: 140 },
    { id: 2, date: "06 th March", amount: 140 },
    { id: 3, date: "06 th March", amount: 140 },
    { id: 4, date: "06 th March", amount: 140 },
    { id: 5, date: "06 th March", amount: 140 },
  ];

  return (
    <div className="container ">
      <h1 className="text-heading-text text-xl font-medium mt-11">
        Payment of 2024
      </h1>
      <div className="p-5">
        <PaymentSuccessCard payments={payments} />
      </div>
    </div>
  );
};

export default PaymentHistory;
