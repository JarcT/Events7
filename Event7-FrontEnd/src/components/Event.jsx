import React, { useState } from "react";
import "./Event.css";

export default function Event({ eventData, updateEvent, deleteEvent }) {
  const [eventFocused, setEventFocused] = useState(false);
  const { id, name, type, priority, description, lastEdited } = eventData;

  //date transformation
  const ISOdate = new Date(lastEdited);
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const date = ISOdate.toLocaleDateString(options);

  //style for the color based on type
  const eventContainerStyle = `event-container ${type}`;

  return (
    <div className={eventContainerStyle}>
      <section
        className="event-head"
        onClick={(e) =>
          setEventFocused((prevEventFocused) => !prevEventFocused)
        }
      >
        <p>{name}</p>
        <p>{date}</p>
        <p className="priority">{priority}</p>
      </section>
      {eventFocused && (
        <section className="event-body">
          {/* id */}
          <p>
            <span>Id:</span> {id}
          </p>
          {/* type */}
          <p>
            <span>Type:</span> {type}
          </p>
          {/* desc */}
          <p>
            <span>Description:</span>
            <br />
            {description}
          </p>
          {/* btns */}
          <div className="btn-container">
            <button className="delete-btn" onClick={() => deleteEvent(id)}>
              Delete
            </button>
            <button
              className="update-btn"
              onClick={() => updateEvent(id, name, type, priority, description)}
            >
              Update
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
