import Button from "./components/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" h-screen text-white font-myFont flex items-center px-4 w-full">
      <header className=" w-full md:w-1/2 grid gap-4 lg:gap-8 md:justify-center md:place-items-center md:mx-auto">
        <section className="flex">
          <div className="bg-gradient-to-b from-white  to-blue-600 text-transparent bg-clip-text">
            <h1 className=" text-6xl md:text-8xl xl:text-9xl font-medium text-left md:text-center">
              {" "}
              BoreNoMore
            </h1>
          </div>
        </section>
        <p className="text-left font-light text-slate-200 md:text-center lg:text-lg lg:w-9/12 2xl:w-7/12">
          Where Boredom Meets Adventure! Input the names of your friends and
          tell us how many are joining the fun. We'll whip up a personalized
          list of boredom-busting activities perfectly tailored to your group
          size. Let's turn your free time into fantastic fun, together!
        </p>

        <div className=" flex gap-6 justify-start">
          <Button>
            <Link
              href="/exampleuser"
              className=" text-sm bg-blue-900 px-4 py-2 rounded-md hover:text-blue-900 hover:outline hover:outline-blue-900 hover:bg-slate-200"
            >
              Example
            </Link>
          </Button>
          <Button>
            <Link
              href="/addfriends"
              className=" text-sm px-4 py-2 rounded-md outline outline-blue-900 hover:outline-none hover:bg-blue-600 "
            >
              Add Friends
            </Link>
          </Button>
        </div>
      </header>
    </main>
  );
}
