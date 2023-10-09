"use client";

import React from "react";

const RefreshButton = () => {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <button
      onClick={refreshPage}
      className="bg-white text-blue-900 hover:outline hover:outline-white hover:bg-blue-900 hover:text-white  mx-auto mt-2 px-8 py-2 "
    >
      New Activity
    </button>
  );
};

export default RefreshButton;
