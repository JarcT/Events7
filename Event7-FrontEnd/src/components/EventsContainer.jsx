import React, { useEffect, useState } from "react";
import Event from "./Event";
import AddEvent from "./AddEvent";
import Modal from "./Modal";
import { deleteData, getData } from "../api/api";

import "./EventsContainer.css";

export default function EventsContainer({ sortBy }) {
  const [events, setEvents] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});

  //fetching data
  const getEvents = async () => {
    const data = await getData(sortBy);
    setEvents(data.events);
  };
  useEffect(() => {
    getEvents();
  }, [sortBy]);

  //create Event
  const createEvent = () => {
    setOpenModal(true);
    setModalData({
      id: "",
      action: "post",
      name: "",
      type: "crosspromo",
      priority: 0,
      description: "",
      style: "create-event",
    });
  };

  //update event
  const updateEvent = (id, name, type, priority, description) => {
    setOpenModal(true);
    setModalData({
      id: id,
      action: "patch",
      name: name,
      type: type,
      priority: priority,
      description: description,
      style: "update-event",
    });
  };

  //delete event
  const deleteEvent = async (id) => {
    await deleteData(id);
    getEvents();
  };

  return (
    <>
      <section className="event-legend">
        <p>Name</p>
        <p>Last Edited</p>
        <p>Priority</p>
      </section>

      <AddEvent handleClick={createEvent} />

      <div className="events-container">
        {/* single events */}
        {events &&
          events.map((event) => {
            const eventData = {
              id: event._id,
              name: event.name,
              type: event.type,
              priority: event.priority,
              description: event.description,
              lastEdited: event.updatedAt,
            };
            return (
              <Event
                key={event._id}
                eventData={eventData}
                updateEvent={updateEvent}
                deleteEvent={deleteEvent}
              />
            );
          })}
      </div>

      {openModal && (
        <Modal
          getEvents={getEvents}
          openModal={setOpenModal}
          modalData={modalData}
        />
      )}
    </>
  );
}
