const express = require("express");
const router = express.Router();

const {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventControllers");

router.route("/events").get(getAllEvents).post(createEvent);
router.route("/events/:id").patch(updateEvent).delete(deleteEvent);

module.exports = router;
