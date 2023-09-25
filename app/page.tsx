import Button from "./components/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen text-white font-myFont flex items-center px-4">
      <header className=" w-full grid gap-4 ">
        <div className="bg-gradient-to-b from-white  to-blue-600 text-transparent bg-clip-text">
          <h1 className=" text-7xl font-semibold text-left">
            {" "}
            Activity Forecast
          </h1>
        </div>
        <p className="text-left font-light">
          Discover endless entertainment options tailored to your mood and
          weather with our innovative boredom solution app. Find exciting
          activities to enjoy, whether it's a sunny day outdoors or a cozy
          evening indoors. Never be bored again!
        </p>

        <div className=" flex gap-6 justify-start">
          <Button>
            <Link href="/activity">Find Activity</Link>
          </Button>
          <Button>
            <Link href="/weather">Weather</Link>
          </Button>
        </div>
      </header>
    </main>
  );
}
