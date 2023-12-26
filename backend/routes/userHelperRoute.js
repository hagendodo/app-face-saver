const express = require("express");
const UserHelper = require("../models/UserHelper"); // Adjust the path accordingly
const userHelpers = express.Router();

// Create a new user helper relationship
userHelpers.post("/", async (req, res) => {
  try {
    const newUserHelper = await UserHelper.create(req.body);
    res.status(201).json({
      message: "User helper relationship created successfully",
      data: newUserHelper,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Get all user helper relationships
userHelpers.get("/", async (req, res) => {
  try {
    const userHelpers = await UserHelper.findAll();
    res.status(200).json({
      message: "User helper relationships retrieved successfully",
      data: userHelpers,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Get a single user helper relationship by ID
userHelpers.get("/:id", async (req, res) => {
  const userHelperId = req.params.id;
  try {
    const userHelper = await UserHelper.findByPk(userHelperId);
    if (userHelper) {
      res.status(200).json({
        message: "User helper relationship retrieved successfully",
        data: userHelper,
      });
    } else {
      res.status(404).json({
        message: "User helper relationship not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Update a user helper relationship by ID
userHelpers.patch("/:id", async (req, res) => {
  const userHelperId = req.params.id;
  try {
    const [updatedRowsCount, updatedUserHelper] = await UserHelper.update(
      req.body,
      {
        where: { id: userHelperId },
        returning: true,
      }
    );

    res.status(200).json({
      message: "User helper relationship updated successfully",
      data: updatedUserHelper[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Delete a user helper relationship by ID
userHelpers.delete("/:id", async (req, res) => {
  const userHelperId = req.params.id;
  try {
    const deletedRowCount = await UserHelper.destroy({
      where: { id: userHelperId },
    });
    if (deletedRowCount > 0) {
      res.status(200).json({
        message: "User helper relationship deleted successfully",
      });
    } else {
      res.status(404).json({
        message: "User helper relationship not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

module.exports = userHelpers;
