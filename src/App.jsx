import React from "react";
import Card from "./components/Card";


const App = () => {
  return (
    <main className="flex items-center justify-center w-full h-screen">
      <div className="max-w-md w-full bg-white text-center rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Quiz App</h1>
        <Card />
      </div>
    </main>
  );
};

export default App;
