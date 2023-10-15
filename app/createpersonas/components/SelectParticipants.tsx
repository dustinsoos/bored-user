type boredData = {
  participants: number;
  activity: string;
};
async function getBored1(): Promise<boredData> {
  const response = await fetch(
    "http://www.boredapi.com/api/activity?participants=1",
    {
      cache: "no-store",
    }
  );

  return response.json();
}

async function getBored2(): Promise<boredData> {
  const response = await fetch(
    "http://www.boredapi.com/api/activity?participants=2",
    {
      cache: "no-store",
    }
  );

  return response.json();
}

async function getBored3(): Promise<boredData> {
  const response = await fetch(
    "http://www.boredapi.com/api/activity?participants=3",
    {
      cache: "no-store",
    }
  );

  return response.json();
}

async function getBored4(): Promise<boredData> {
  const response = await fetch(
    "http://www.boredapi.com/api/activity?participants=4",
    {
      cache: "no-store",
    }
  );

  return response.json();
}

export default async function SelectParticipants({}) {
  const [bored1, bored2, bored3, bored4] = await Promise.all([
    getBored1(),
    getBored2(),
    getBored3(),
    getBored4(),
  ]);
  return (
    <main className="text-center">
      <h3 className=" text-2xl bg-gradient-to-b from-white  to-blue-600 text-transparent bg-clip-text">
        Pick Number of Participants
      </h3>
      <div className="flex gap-4 justify-center">
        <button className=" bg-blue-900 px-4 py-2 hover:text-blue-900 hover:outline hover:outline-blue-900 hover:bg-slate-200">
          1
        </button>
        <button className=" bg-blue-900 px-4 py-2 hover:text-blue-900 hover:outline hover:outline-blue-900 hover:bg-slate-200">
          2
        </button>
        <button className=" bg-blue-900 px-4 py-2 hover:text-blue-900 hover:outline hover:outline-blue-900 hover:bg-slate-200">
          3
        </button>
        <button className=" bg-blue-900 px-4 py-2 hover:text-blue-900 hover:outline hover:outline-blue-900 hover:bg-slate-200">
          4
        </button>
      </div>
    </main>
  );
}
