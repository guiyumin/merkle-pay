import { Button, Input, Select, Textarea, SelectItem } from "@nextui-org/react";
import { Payment, PaymentStep } from "root/types";
import { currencies, Currency } from "root/utils/currencies";
import isEmail from "validator/lib/isEmail";

type Props = {
  payment: Payment;
  goToStep: (step: PaymentStep) => void;
  updatePayment: (obj: Partial<Payment>) => void;
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

    if (!payment.currency_amount || Number(payment.currency_amount) <= 0) {
      window.toast.error("Please enter correct amount");
      return;
    }

    if (!payment.payer_email || !isEmail(payment.payer_email)) {
      window.toast.error("Please enter payer email");
      return;
    }

    goToStep("warning");
  };

  return (
    <div className="w-full md:w-96 mx-auto flex flex-col gap-4">
      <Input
        className="w-full"
        label="Order ID"
        name="orderId"
        type="text"
        value={payment.orderId}
        onChange={(e) => updatePayment({ orderId: e.target.value })}
      />
      <Input
        isReadOnly
        className="w-full"
        label="Blockchain"
        name="blockchain"
        type="text"
        value={payment.blockchain}
      />
      <Input
        isReadOnly
        className="w-full"
        label="Receiver Address"
        name="receiver_address"
        type="text"
        value={payment.receiver_address}
      />

      <Select
        className="w-full"
        defaultSelectedKeys={[payment.currency || "USD"]}
        items={currencies}
        label="Currency"
        name="currency"
        onChange={(e) => {
          updatePayment({ currency: e.target.value as Currency });
        }}
      >
        {(currency) => (
          <SelectItem key={currency.value} value={currency.value}>
            {currency.label}
          </SelectItem>
        )}
      </Select>

      <Input
        className="w-full"
        label="Currency Amount"
        name="currency_amount"
        type="number"
        value={payment.currency_amount}
        onChange={(e) => updatePayment({ currency_amount: e.target.value })}
      />
      <Input
        className="w-full"
        label="Payor Name"
        name="payor_name"
        type="text"
        value={payment.payer_name}
        onChange={(e) => updatePayment({ payer_name: e.target.value })}
      />
      <Input
        className="w-full"
        label="Email"
        name="payor_email"
        placeholder="Enter your email"
        type="email"
        value={payment.payer_email}
        onChange={(e) => updatePayment({ payer_email: e.target.value })}
      />
      <Textarea
        className="w-full"
        label="Memo"
        name="memo"
        value={payment.memo}
        onChange={(e) => updatePayment({ memo: e.target.value })}
      />
      <Button color="primary" onClick={handleClickNext}>
        Next
      </Button>
    </div>
  );
}
