import React from "react";
import "./AddEvent.css";

export default function AddEvent(props) {
  return (
    <section className="add-event" onClick={props.handleClick}>
      <p>
        <span className="plus">+</span> Add New Event
      </p>
    </section>
  );
}
