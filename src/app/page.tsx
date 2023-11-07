import { Logo } from "@eduardoaraya/components/ui/logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="font-title font-bold">eduardoaraya.me</h1>
      <h2 className="mt-10 font-title">Hi there!</h2>
      <p className="w-[500px] mt-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the {"industry's"} standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </main>
  );
}
