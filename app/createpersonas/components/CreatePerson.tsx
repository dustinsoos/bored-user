"use client";

import React from "react";
import { useState } from "react";

export default function CreatePerson() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  return (
    <main>
      <form action="">
        <fieldset className="grid  text-center">
          <label htmlFor="name">Your Persona Name:</label>
          <input
            value={name}
            id="name"
            type="text"
            placeholder="John"
            className="text-center text-black"
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset className="grid  text-center">
          <label htmlFor="gender">Select Gender:</label>
          <select
            value={gender}
            name="gender"
            id="gender"
            className=" text-black text-center "
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </fieldset>
      </form>
    </main>
  );
}
