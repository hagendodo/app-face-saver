const express = require("express");
const HistoryMenu = require("../models/HistoryMenu"); // Adjust the path accordingly
const Menu = require("../models/Menu");
const historyMenus = express.Router();

// Create a new history menu relationship
historyMenus.post("/", async (req, res) => {
  try {
    // Create a new history menu relationship
    const newHistoryMenu = await HistoryMenu.create(req.body);
    const menuMessage = await Menu.findByPk(newHistoryMenu.menu_id);

    // Post to the 'response/' route using fetch
    const response = await fetch(
      `http://localhost:${process.env.PORT}/response`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          helper_id: 1,
          menu_message: menuMessage ? menuMessage.message : "No Message",
        }),
      }
    );

    // Assuming the response from the 'response/' route is needed or useful
    const responseData = await response.json();

    res.status(201).json({
      message: "History menu relationship created successfully",
      data: {
        historyMenu: newHistoryMenu,
        response: responseData,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Get all history menu relationships
historyMenus.get("/", async (req, res) => {
  try {
    const historyMenus = await HistoryMenu.findAll({
      include: [
        {
          model: Menu,
          attributes: ["name", "message"],
        },
      ],
      order: [["createdAt", "DESC"]],
      limit: 10,
    });

    res.status(200).json({
      message: "History menu relationships retrieved successfully",
      data: historyMenus,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Get a single history menu relationship by ID
historyMenus.get("/:id", async (req, res) => {
  const historyMenuId = req.params.id;
  try {
    const historyMenu = await HistoryMenu.findByPk(historyMenuId);
    if (historyMenu) {
      res.status(200).json({
        message: "History menu relationship retrieved successfully",
        data: historyMenu,
      });
    } else {
      res.status(404).json({
        message: "History menu relationship not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Update a history menu relationship by ID
historyMenus.patch("/:id", async (req, res) => {
  const historyMenuId = req.params.id;
  try {
    const [updatedRowsCount, updatedHistoryMenu] = await HistoryMenu.update(
      req.body,
      {
        where: { id: historyMenuId },
        returning: true,
      }
    );

    res.status(200).json({
      message: "History menu relationship updated successfully",
      data: updatedHistoryMenu[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Delete a history menu relationship by ID
historyMenus.delete("/:id", async (req, res) => {
  const historyMenuId = req.params.id;
  try {
    const deletedRowCount = await HistoryMenu.destroy({
      where: { id: historyMenuId },
    });
    if (deletedRowCount > 0) {
      res.status(200).json({
        message: "History menu relationship deleted successfully",
      });
    } else {
      res.status(404).json({
        message: "History menu relationship not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

module.exports = historyMenus;
