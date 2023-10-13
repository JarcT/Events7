import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Modal.css";
import { postData, patchData } from "../api/api";

export default function Modal({ getEvents, openModal, modalData }) {
  const { id, action, name, type, priority, description, style } = modalData;

  //react-hook-form
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: name,
      type: type,
      priority: priority,
      description: description,
    },
  });

  //sending data states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //submit data
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      if (action === "post") {
        const created = await postData(data);
      }
      if (action === "patch") {
        const created = await patchData(data, id);
      }
      setLoading(false);
      setError("");
      getEvents();
      openModal(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="background">
      <section className="modal">
        <div className="close-modal" onClick={() => openModal(false)}>
          +
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <p className={style} id="title">
            {action === "post" ? "Add New Event" : "Update Event"}
          </p>
          {/* error message */}
          {error && <p className="error">error</p>}

          {/* name */}
          <label htmlFor="name">
            Name:
            <input
              className="name-input"
              id="name"
              {...register("name")}
              required
              placeholder="Event name"
            />
          </label>
          {/* type */}
          <label htmlFor="type">
            Type:
            <select id="type" {...register("type")}>
              <option value="crosspromo">crosspromo</option>
              <option value="liveops">liveops</option>
              <option value="app">app</option>
              <option value="ads">ads</option>
            </select>
          </label>
          {/* priority */}
          <label htmlFor="priority">
            Priority:
            <select id="priority" {...register("priority")} required>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </label>
          {/* description */}
          <label htmlFor="description">
            Description:
            <textarea
              id="description"
              cols="30"
              rows="10"
              {...register("description")}
              required
              placeholder="Event description"
            ></textarea>
          </label>
          {/* button */}
          <button className={style} disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </section>
    </div>
  );
}
