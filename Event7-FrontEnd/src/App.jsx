import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import EventsContainer from "./components/EventsContainer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [sortBy, setSortBy] = useState("lastChanged");

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <main className="main-container">
        {/* header-legend*/}
        <Header sortBy={sortBy} setSortBy={setSortBy} />
        <EventsContainer sortBy={sortBy} />
      </main>
    </>
  );
}

export default App;
