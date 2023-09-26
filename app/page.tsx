import Button from "./components/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen text-white font-myFont flex items-center px-4">
      <header className=" w-full md:w-1/2 grid gap-4 lg:gap-8 md:justify-center md:place-items-center md:mx-auto">
        <section className="flex">
          <div className="bg-gradient-to-b from-white  to-blue-600 text-transparent bg-clip-text">
            <h1 className=" text-7xl md:text-8xl xl:text-9xl font-medium text-left md:text-center">
              {" "}
              Activity Forecast
            </h1>
          </div>
        </section>
        <p className="text-left font-light text-slate-200 md:text-center lg:text-lg lg:w-9/12 2xl:w-7/12">
          Discover endless entertainment options tailored to your mood and
          weather with our innovative boredom solution app. Find exciting
          activities to enjoy, whether it's a sunny day outdoors or a cozy
          evening indoors. Never be bored again!
        </p>

        <div className=" flex gap-6 justify-start">
          <Button>
            <Link
              href="/activity"
              className=" text-sm bg-blue-900 px-4 py-2 rounded-md hover:text-blue-900 hover:outline hover:outline-blue-900 hover:bg-slate-200"
            >
              Find Activity
            </Link>
          </Button>
          <Button>
            <Link
              href="/weather"
              className=" text-sm px-4 py-2 rounded-md outline outline-blue-900 hover:outline-none hover:bg-blue-600 "
            >
              Weather
            </Link>
          </Button>
        </div>
      </header>
    </main>
  );
}
