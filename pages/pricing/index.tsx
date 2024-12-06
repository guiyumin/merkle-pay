import { title } from "root/components/primitives";
import DefaultLayout from "root/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 className={title()}>Pricing</h1>
        <div
          className={`${title({ color: "green" })} h-20 leading-[80px] align-middle`}
        >
          Always Free
        </div>
      </section>
    </DefaultLayout>
  );
}
