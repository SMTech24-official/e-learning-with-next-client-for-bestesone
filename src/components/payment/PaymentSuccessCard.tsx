"use client"
import { Check } from "lucide-react";

interface payment {
  id: number | string;
  date: string;
  amount: number;
}

interface PaymentProps {
  payments: payment[];
}

export default function PaymentSuccessCard({ payments }: PaymentProps) {
  return (
    <div className="w-full max-w-md space-y-3">
      {payments.map((payment: payment) => (
        <>
          <div key={payment.id} className="flex items-center px-4">
            <div className="flex items-center gap-3 flex-1">
              <div className="rounded-full bg-violet-500 p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900">
                  Payment Successful
                </h3>
                <p className="text-sm text-gray-500">{payment.date}</p>
              </div>
            </div>
            <div className="text-lg font-semibold">${payment.amount}</div>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
}
