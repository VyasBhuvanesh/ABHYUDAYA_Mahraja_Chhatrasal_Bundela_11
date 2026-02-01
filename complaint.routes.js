const express = require("express");
const router = express.Router();
const controller = require("../controllers/complaint.controller");

router.post("/", controller.raiseComplaint);
router.get("/my", controller.getMyComplaints);
router.put("/assign/:id", controller.assignComplaint);
router.put("/status/:id", controller.updateStatus);
router.post("/feedback/:id", controller.giveFeedback);

module.exports = router;
