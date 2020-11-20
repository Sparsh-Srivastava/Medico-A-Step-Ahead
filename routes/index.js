const express = require("express");
const app = express();
const router = express.Router();

// Models
const Doctors = require("../models/doctors");
const Patients = require("../models/patients");

module.exports = router;
