// import Users from "./components/users";

type boredData = {
  activity: string;
  type: string;
  participants: number;
  key: string;
};

type userData = {
  results: [
    { name: { first: string; last: string } },
    {
      picture: {
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg";
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
  const thumbnailUrl = user.results[0].picture.thumbnail;

  return (
    <main className=" text-white text-center  mt-32 ">
      <h1 className="text-5xl bg-gradient-to-b from-white  to-blue-600 text-transparent bg-clip-text">
        Try Example
      </h1>
      <section className="grid gap-2 mt-4">
        <h3>Activity: {bored.activity}</h3>
        <p>Type: {bored.type}</p>
        <p>Participants Needed: {bored.participants}</p>
        <p>
          User: {first} {last}
        </p>
        <img
          src={thumbnailUrl}
          alt="thumbnail-img"
          className="mx-auto w-12 rounded-full"
        />
      </section>
    </main>
  );
}
