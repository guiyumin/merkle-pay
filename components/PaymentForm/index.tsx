import { Button, Input, Textarea } from "@nextui-org/react";
import { Payment, PaymentStep } from "root/types";
import isEmail from "validator/lib/isEmail";

type Props = {
  payment: Payment;
  goToStep: (step: PaymentStep) => void;
  updatePayment: (k: string, v: string) => void;
};

export default function PaymentForm(props: Props) {
  const { payment, goToStep, updatePayment } = props;

  const handleClickNext = () => {
    if (!payment.receiver_address) {
      window.toast.error("Please enter receiver address");
      return;
    }

    if (!payment.orderId) {
      window.toast.error("Please enter orderId");
      return;
    }

    if (!payment.usd_amount || Number(payment.usd_amount) <= 0) {
      window.toast.error("Please enter amount");
      return;
    }

    if (!payment.payer_email || !isEmail(payment.payer_email)) {
      window.toast.error("Please enter payer email");
      return;
    }

    goToStep("warning");
  };

  return (
    <div className="w-96 mx-auto flex flex-col gap-4">
      <Input
        className="w-full"
        label="Order ID"
        name="orderId"
        type="text"
        value={payment.orderId}
      />
      <Input
        className="w-full"
        label="Blockchain"
        name="blockchain"
        type="text"
        value={payment.blockchain}
        readOnly
      />
      <Input
        className="w-full"
        label="Receiver Address"
        name="receiver_address"
        type="text"
        value={payment.receiver_address}
        readOnly
      />
      <Input
        className="w-full"
        label="USD Amount"
        name="usd_amount"
        type="text"
        value={payment.usd_amount}
      />
      <Input
        className="w-full"
        label="Payor Name"
        name="payor_name"
        type="text"
        value={payment.payer_name}
      />
      <Input
        className="w-full"
        label="Email"
        name="payor_email"
        placeholder="Enter your email"
        type="email"
        value={payment.payer_email}
      />
      <Textarea
        className="w-full"
        label="Memo"
        name="memo"
        value={payment.memo}
      />
      <Button color="primary" onClick={handleClickNext}>
        Next
      </Button>
    </div>
  );
}
