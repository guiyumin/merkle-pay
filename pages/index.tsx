import type { GetServerSidePropsContext } from "next";

import { useState } from "react";
import PaymentForm from "root/components/PaymentForm";
import { title } from "root/components/primitives";
import DefaultLayout from "root/layouts/default";
import { Payment, PaymentStep } from "root/types";
import { Currency } from "root/utils/currencies";

type Props = {
  blockchain: string;
  receiver_address: string;
  orderId: string;
  currency: Currency;
  currency_amount: string;
};

export default function IndexPage(props: Props) {
  const { blockchain, receiver_address, orderId, currency, currency_amount } =
    props;

  const [step, setStep] = useState<PaymentStep>("form");

  const [payment, setPayment] = useState<Payment>({
    orderId,
    blockchain,
    receiver_address,
    payer_name: "",
    payer_email: "",
    currency_amount,
    currency,
    status: "initiated",
    memo: "",
  });

  console.log("payment.currency", payment.currency);

  const goToStep = (step: PaymentStep) => {
    setStep(step);
  };

  const updatePayment = (obj: Partial<Payment>) => {
    setPayment((p) => {
      return {
        ...p,
        ...obj,
      };
    });
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 className={title({ size: "sm" })}>Merkle Pay</h1>
        <PaymentForm
          goToStep={goToStep}
          payment={payment}
          updatePayment={updatePayment}
        />
      </section>
    </DefaultLayout>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { query } = ctx;

  return {
    props: {
      blockchain: process.env.BLOCKCHAIN,
      receiver_address: process.env.RECEIVER_ADDRESS,
      orderId: query.orderId || "",
      currency: (query.currency || "") as Currency,
      currency_amount: query.amount || "",
    },
  };
};
