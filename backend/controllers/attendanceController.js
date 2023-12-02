const Attendance = require("../models/Attendance");

const createAttendance = async (req, res, next) => {
  try {
    const { subjectId, status } = req.body;
    const { studentId } = req.params;

    console.log("studentId: ", studentId);
    console.log("subjectId: ", subjectId);
    console.log("status: ", status);

    const attendance = await Attendance.create({
      student: studentId,
      subject: subjectId,
      status,
    });

    res.status(201).json({ success: true, attendance });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createAttendance,
};
