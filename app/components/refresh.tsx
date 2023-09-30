"use client";

import React from "react";

const RefreshButton = () => {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <button
      onClick={refreshPage}
      className="bg-blue-900  mx-auto mt-4 px-8 py-2 rounded-xl"
    >
      Refresh Data
    </button>
  );
};

export default RefreshButton;
