import { useEffect } from "react";

interface Activity {
  activity: string;
}

interface SelectParticipantsProps {
  participants: number;
  apiData: Activity | null;
  setApiData: React.Dispatch<React.SetStateAction<Activity | null>>;
  onParticipantChange: (numParticipants: number) => void;
}

export default function SelectParticipants({
  participants,
  apiData,
  onParticipantChange,
  setApiData,
}: SelectParticipantsProps) {
  useEffect(() => {
    if (participants > 0) {
      fetch(
        `https://www.boredapi.com/api/activity?participants=${participants}`
      )
        .then((response) => response.json())
        .then((data: Activity) => {
          setApiData(data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  }, [participants, setApiData]);
  return (
    <main className="text-center">
      <h3 className=" text-2xl bg-gradient-to-b from-white  to-blue-600 text-transparent bg-clip-text">
        Pick Number of Participants
      </h3>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => onParticipantChange(1)}
          className=" bg-blue-900 px-4 py-2 hover:text-blue-900 hover:outline hover:outline-blue-900 hover:bg-slate-200"
        >
          1
        </button>
        <button
          onClick={() => onParticipantChange(2)}
          className=" bg-blue-900 px-4 py-2 hover:text-blue-900 hover:outline hover:outline-blue-900 hover:bg-slate-200"
        >
          2
        </button>
        <button
          onClick={() => onParticipantChange(3)}
          className=" bg-blue-900 px-4 py-2 hover:text-blue-900 hover:outline hover:outline-blue-900 hover:bg-slate-200"
        >
          3
        </button>
        <button
          onClick={() => onParticipantChange(4)}
          className=" bg-blue-900 px-4 py-2 hover:text-blue-900 hover:outline hover:outline-blue-900 hover:bg-slate-200"
        >
          4
        </button>
      </div>

      {apiData && (
        <p>
          Activity for {participants}: {apiData.activity}
        </p>
      )}
    </main>
  );
}
