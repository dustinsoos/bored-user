import RefreshButton from "../components/refresh";

type boredData = {
  activity: string;
  type: string;
  participants: number;
  key: string;
};

type userData = {
  results: [
    {
      name: {
        first: string;
        last: string;
      };
      picture: {
        large: string;
        medium: string;
        thumbnail: string;
      };
    },
  ];
};

async function getBored(): Promise<boredData> {
  const response = await fetch(
    "http://www.boredapi.com/api/activity?participants=1",
    {
      cache: "no-store",
    }
  );

  return response.json();
}

async function getUser(): Promise<userData> {
  const response = await fetch("https://randomuser.me/api/?nat=us", {
    cache: "no-store",
  });

  return response.json();
}

export default async function Example() {
  const [bored, user] = await Promise.all([getBored(), getUser()]);
  const { first, last } = user.results[0].name;
  const thumbnailUrl = user.results[0].picture.large;

  return (
    <main className=" text-white text-center  mt-52 px-4">
      <h1 className="text-6xl md:text-8xl xl:text-7xl font-medium bg-gradient-to-b from-white  to-blue-600 text-transparent bg-clip-text">
        Example
      </h1>
      <section className=" mt-4 bg-blue-900 py-4 rounded-lg md:w-1/2 lg:w-1/3 mx-auto outline outline-slate-200">
        <div className="grid gap-2 lg:text-lg">
          <img
            src={thumbnailUrl}
            alt="thumbnail-img"
            className="mx-auto rounded-full outline outline-slate-200"
          />
          <p>
            User: {first} {last}
          </p>

          <h3>Activity: {bored.activity}</h3>
          <p>Type: {bored.type}</p>
          <p>Participants Needed: {bored.participants}</p>
          <RefreshButton />
        </div>
      </section>
    </main>
  );
}
