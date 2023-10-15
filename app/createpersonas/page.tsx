"use client";

import { useState } from "react";
import CreatePerson from "./components/CreatePerson";
import SelectParticipants from "./components/SelectParticipants";

const CreatePersonas = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <main className="px-2 mt-32">
      <h1 className=" text-center text-5xl bg-gradient-to-b from-white  to-blue-600 text-transparent bg-clip-text mb-16">
        Create Your Personas
      </h1>
      <div className="grid gap-10 md:flex   text-white w-2/3 lg:w-1/2 mx-auto lg:justify-between">
        <CreatePerson />
        <SelectParticipants isClicked={isClicked} setIsClicked={setIsClicked} />
      </div>
    </main>
  );
};

export default CreatePersonas;
