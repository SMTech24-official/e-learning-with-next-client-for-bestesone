"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/my-ui/button";
import Image from "next/image";
import masterCard from "@/assets/payments/masterCard.png";
import visa from "@/assets/payments/visa.png";
import paypal from "@/assets/payments/paypal.png";
import applePay from "@/assets/payments/applePay.png";
import googlePay from "@/assets/payments/googlePay.png";
import clicq from "@/assets/payments/clicq.png";
import { useRouter } from "next/navigation";

const PaymentMethodCard = () => {
  const router = useRouter();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="paypal" className="space-y-3">
          <div className="flex items-center space-x-2 rounded-lg border p-3">
            <RadioGroupItem value="credit-card" id="credit-card" />
            <Label htmlFor="credit-card" className="flex-1">
              Credit Card
            </Label>
            <Image src={masterCard} alt="Mastercard" className="h-8 w-auto" />
          </div>
          <div className="flex items-center space-x-2 rounded-lg border p-3">
            <RadioGroupItem value="visa" id="visa" />
            <Label htmlFor="visa" className="flex-1">
              Visa
            </Label>
            <Image src={visa} alt="Visa" className="h-8 w-auto" />
          </div>
          <div className="flex items-center space-x-2 rounded-lg border p-3">
            <RadioGroupItem value="paypal" id="paypal" />
            <Label htmlFor="paypal" className="flex-1">
              PayPal
            </Label>
            <Image src={paypal} alt="PayPal" className="h-8 w-auto" />
          </div>
          <div className="flex items-center space-x-2 rounded-lg border p-3">
            <RadioGroupItem value="apple-pay" id="apple-pay" />
            <Label htmlFor="apple-pay" className="flex-1">
              Apple Pay
            </Label>
            <Image src={applePay} alt="Apple Pay" className="h-8 w-auto" />
          </div>
          <div className="flex items-center space-x-2 rounded-lg border p-3">
            <RadioGroupItem value="google-pay" id="google-pay" />
            <Label htmlFor="google-pay" className="flex-1">
              Google Pay
            </Label>
            <Image src={googlePay} alt="Google Pay" className="h-8 w-auto" />
          </div>
          <div className="flex items-center space-x-2 rounded-lg border p-3">
            <RadioGroupItem value="clio" id="clio" />
            <Label htmlFor="clio" className="flex-1">
              Clio
            </Label>
            <Image src={clicq} alt="Clio" className="h-8 w-auto" />
          </div>
        </RadioGroup>
        <Button
          onClick={() => router.push("/payment/card-details")}
          className="mt-6 w-full"
          size="lg"
        >
          Next
        </Button>
      </CardContent>
    </Card>
  );
};

export default PaymentMethodCard;
