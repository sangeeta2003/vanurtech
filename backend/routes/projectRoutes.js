const express = require("express");
const Project = require("../models/Project");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create a new project (Admin Only)
router.post("/", authMiddleware, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ message: "Access Denied" });

  const { name, description, assignedTo } = req.body;

  try {
    const project = new Project({ name, description, assignedTo });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get all projects (Admin & Customers)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const projects =
      req.user.role === "admin"
        ? await Project.find().populate("assignedTo", "name email")
        : await Project.find({ assignedTo: req.user.id });

    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Update project status (Admin Only)
router.put("/:id", authMiddleware, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ message: "Access Denied" });

  try {
    const project = await Project.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
