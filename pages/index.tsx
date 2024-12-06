import { Input, Textarea } from "@nextui-org/react";
import { title } from "root/components/primitives";
import DefaultLayout from "root/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 className={title({ size: "sm" })}>Merkle Pay</h1>
        <div className="w-96 mx-auto flex flex-col gap-4">
          <Input
            className="w-full"
            label="Order ID"
            name="orderId"
            type="text"
          />
          <Input
            className="w-full"
            label="Receiver Address (USDT ERC20)"
            name="receiverAddress"
            type="text"
          />
          <Input className="w-full" label="Amount" name="amount" type="text" />
          <Input
            className="w-full"
            label="Payor Name"
            name="payor_name"
            type="text"
          />
          <Input
            className="w-full"
            label="Email"
            name="payor_email"
            placeholder="Enter your email"
            type="email"
          />
          <Textarea className="w-full" label="Memo" name="memo" />
        </div>
      </section>
    </DefaultLayout>
  );
}
