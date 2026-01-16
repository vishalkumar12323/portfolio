import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MoveRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with me, if you'd like to work with me",
  authors: [
    { name: "Vishal Kumar", url: "https://github.com/vishalkumar12323" },
  ],
}

export default function ContactPage() {
  return (
    <Card className="my-4 md:my-8 p-2 md:p-4 rounded-sm border-none bg-accent">
      <div className="project-heading after:bg-gray-700 dark:after:bg-gray-400 text-center mt-5 mb-4 text-[20px] md:text-4xl md:mt-8 font-bold relative bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400 bg-gradient-to-b from-black to-neutral-800">
        <h2 className="leading-12 md:leading-10 uppercase">Contact Us</h2>
      </div>

      <div className="mb-3 w-full">
        <p className="text-center w-full leading-6 text-gray-800 dark:text-gray-300">
          Interested, send a message if you&apos;d like to work with me.
        </p>
      </div>

      <div className="mx-auto max-w-[110rem] w-full mt-4 mb-4">
        <div className="mx-3 md:mx-10">
          <form action="https://formspree.io/f/xdknnbed" method="POST">
            <Input
              id="fullname"
              className="px-8 bg-white dark:accent-accent shadow-md min-w-full py-6 rounded-none border-transparent border-b-2 focus:border-b-gray-800 dark:focus:border-b-gray-200 transition duration-300 mb-8"
              placeholder="Full Name"
              required
            />
            <Input
              id="email"
              className="px-8 bg-white dark:accent-accent shadow-md min-w-full py-6 rounded-none border-transparent border-b-2 focus:border-b-gray-800 dark:focus:border-b-gray-200 transition duration-300 mb-8"
              placeholder="Email"
              required
            />

            <Textarea
              id="message"
              placeholder="Your Message"
              className="px-8 bg-white dark:accent-accent shadow-md min-w-full py-6 rounded-none border-transparent border-b-2 focus:border-b-gray-800 dark:focus:border-b-gray-200 transition duration-300 mb-8 h-40"
              required
            />

            <Button
              type="submit"
              variant={"outline"}
              className="cursor-pointer capitalize rounded-sm py-2 border-none shadow-md mb-4"
            >
              <span>Send</span> <MoveRight />{" "}
            </Button>
          </form>
          <div
            className="mb-4
          "
          >
            <p>If you prefer to contact directly through email:</p>
            <p className="dark:text-gray-300 text-gray-700 text-[14px] md:text-[15px]">
              itsvishal774@gmail.com
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
