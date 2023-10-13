const { StatusCodes } = require("http-status-codes");
const { format } = require("date-fns");

const Event = require("../models/eventSchema");

const getAllEvents = async (req, res) => {
  const { sortBy } = req.query;
  let events = await Event.find({}).select("-__v");
  if (sortBy === "name") {
    events = events.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "type") {
    events = events.sort((a, b) => a.type.localeCompare(b.type));
  } else if (sortBy === "priority") {
    events = events.sort((a, b) => b.priority - a.priority);
  } else if (sortBy === "lastChanged") {
    events = events.sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
    );
  }

  res.status(StatusCodes.OK).json({ events });
};

const createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  res.status(StatusCodes.CREATED).json({ message: "Event created." });
};

const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { name, type, priority, description } = req.body;
  console.log(req.body);
  const types = ["crosspromo", "liveops", "app", "ads"];
  if (!name || !description || !type) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Can not update to an empty value!" });
  }
  if (types.some((correctType) => correctType === type) === false) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Invalid type value!" });
  }
  if (priority > 10 || priority < 0) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Priority value must be in range from 0 to 10" });
  }
  const event = await Event.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ message: `${event.name} updated` });
};

const deleteEvent = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findByIdAndDelete({ _id: id });
  res.status(StatusCodes.OK).json({ message: `${event.name} deleted` });
};

module.exports = { getAllEvents, createEvent, updateEvent, deleteEvent };
