import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default async function Home() {
 

  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8 px-8 sm:px-16">
          <div className="flex flex-col items-start space-y-4 max-w-md text-left">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              welcome to my ecommerce
            </h2>
            <p className="text-neutral-600">
              discover the latest products at the best price
            </p>

            <Button
              variant="default"
              className="rounded-full px-6 py-3 bg-black text-white"
            >
              <Link href="/products">browse all products</Link>
            </Button>
          </div>

          
        </div>
        <Link href="/dashboard/customers">browse all customers</Link>
      </section>

      <section className="py-8">
        {/*  <Coursel products={products.data*/}
      </section>
    </div>
  );
}
