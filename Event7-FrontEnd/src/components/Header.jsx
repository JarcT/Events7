import React from "react";
import "./Header.css";

export default function Header({ sortBy, setSortBy }) {
  return (
    <>
      <h1 className="logo">Events7</h1>
      <header>
        <label>
          Sort by:
          <select
            name="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="type">Type</option>
            <option value="priority">Priority</option>
            <option value="lastChanged">Last Edited</option>
          </select>
        </label>
      </header>
    </>
  );
}
