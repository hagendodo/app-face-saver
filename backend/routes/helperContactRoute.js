const express = require("express");
const HelperContact = require("../models/HelperContact"); // Adjust the path accordingly
const helperContacts = express.Router();

// Create a new helper contact
helperContacts.post("/", async (req, res) => {
  try {
    const newHelperContact = await HelperContact.create(req.body);
    res.status(201).json({
      message: "Helper contact created successfully",
      data: newHelperContact,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Get all helper contacts
helperContacts.get("/", async (req, res) => {
  try {
    const helperContacts = await HelperContact.findAll();
    res.status(200).json({
      message: "Helper contacts retrieved successfully",
      data: helperContacts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Get a single helper contact by ID
helperContacts.get("/:id", async (req, res) => {
  const helperContactId = req.params.id;
  try {
    const helperContact = await HelperContact.findByPk(helperContactId);
    if (helperContact) {
      res.status(200).json({
        message: "Helper contact retrieved successfully",
        data: helperContact,
      });
    } else {
      res.status(404).json({
        message: "Helper contact not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Update a helper contact by ID
helperContacts.patch("/:id", async (req, res) => {
  const helperContactId = req.params.id;
  try {
    const [updatedRowsCount, updatedHelperContact] = await HelperContact.update(
      req.body,
      {
        where: { id: helperContactId },
        returning: true,
      }
    );

    res.status(200).json({
      message: "Helper contact updated successfully",
      data: updatedHelperContact[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Delete a helper contact by ID
helperContacts.delete("/:id", async (req, res) => {
  const helperContactId = req.params.id;
  try {
    const deletedRowCount = await HelperContact.destroy({
      where: { id: helperContactId },
    });
    if (deletedRowCount > 0) {
      res.status(200).json({
        message: "Helper contact deleted successfully",
      });
    } else {
      res.status(404).json({
        message: "Helper contact not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

module.exports = helperContacts;
