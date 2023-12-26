const express = require("express");
const Menu = require("../models/Menu"); // Make sure the path is correct
const menus = express.Router();

// Create a new menu
menus.post("/", async (req, res) => {
  try {
    const newMenu = await Menu.create(req.body);
    res.status(201).json({
      message: "Menu created successfully",
      data: newMenu,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Get all menus
menus.get("/", async (req, res) => {
  try {
    const menus = await Menu.findAll();
    res.status(200).json({
      message: "Menus retrieved successfully",
      data: menus,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Get a single menu by ID
menus.get("/:id", async (req, res) => {
  const menuId = req.params.id;
  try {
    const menu = await Menu.findByPk(menuId);
    if (menu) {
      res.status(200).json({
        message: "Menu retrieved successfully",
        data: menu,
      });
    } else {
      res.status(404).json({
        message: "Menu not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Update a menu by ID
menus.patch("/:id", async (req, res) => {
  const menuId = req.params.id;
  try {
    const [updatedRowsCount, updatedMenu] = await Menu.update(req.body, {
      where: { id: menuId },
      returning: true,
    });

    res.status(200).json({
      message: "Menu updated successfully",
      data: updatedMenu[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Delete a menu by ID
menus.delete("/:id", async (req, res) => {
  const menuId = req.params.id;
  try {
    const deletedRowCount = await Menu.destroy({
      where: { id: menuId },
    });
    if (deletedRowCount > 0) {
      res.status(200).json({
        message: "Menu deleted successfully",
      });
    } else {
      res.status(404).json({
        message: "Menu not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

module.exports = menus;
