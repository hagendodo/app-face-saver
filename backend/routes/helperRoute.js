const express = require("express");
const Helper = require("../models/Helper"); // Adjust the path accordingly
const helpers = express.Router();

// Create a new helper
helpers.post("/", async (req, res) => {
  try {
    const newHelper = await Helper.create(req.body);
    res.status(201).json({
      message: "Helper created successfully",
      data: newHelper,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Get all helpers
helpers.get("/", async (req, res) => {
  try {
    const helpers = await Helper.findAll();
    res.status(200).json({
      message: "Helpers retrieved successfully",
      data: helpers,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Get a single helper by ID
helpers.get("/:id", async (req, res) => {
  const helperId = req.params.id;
  try {
    const helper = await Helper.findByPk(helperId);
    if (helper) {
      res.status(200).json({
        message: "Helper retrieved successfully",
        data: helper,
      });
    } else {
      res.status(404).json({
        message: "Helper not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Update a helper by ID
helpers.patch("/:id", async (req, res) => {
  const helperId = req.params.id;
  try {
    const [updatedRowsCount, updatedHelper] = await Helper.update(req.body, {
      where: { id: helperId },
      returning: true,
    });

    res.status(200).json({
      message: "Helper updated successfully",
      data: updatedHelper[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Delete a helper by ID
helpers.delete("/:id", async (req, res) => {
  const helperId = req.params.id;
  try {
    const deletedRowCount = await Helper.destroy({
      where: { id: helperId },
    });
    if (deletedRowCount > 0) {
      res.status(200).json({
        message: "Helper deleted successfully",
      });
    } else {
      res.status(404).json({
        message: "Helper not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

module.exports = helpers;
