import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Payment = {
  orderId: string;
  blockchain: string;
  receiver_address: string;
  payer_name: string;
  payer_email: string;
  usd_amount: string;
  status:
    | "initiated"
    | "pending"
    | "paid"
    | "cancelled"
    | "refunded"
    | "failed";
  memo: string;
};

export type PaymentStep = "form" | "warning" | "confirmation" | "status";
