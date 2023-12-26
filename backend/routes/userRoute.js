const app = require("express");
const User = require("../models/User");
const users = app.Router();

// Create a new user
users.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Get all users
users.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Get a single user by ID
users.get("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (user) {
      res.status(200).json({
        message: "User retrieved successfully",
        data: user,
      });
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Update a user by ID
users.patch("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const [updatedRowsCount, updatedUser] = await User.update(req.body, {
      where: { id: userId },
      returning: true,
    });

    res.status(200).json({
      message: "User updated successfully",
      data: updatedUser[0],
    });

    // if (updatedRowsCount > 0) {

    // } else {
    //   res.status(404).json({
    //     message: "User not found",
    //   });
    // }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Delete a user by ID
users.delete("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedRowCount = await User.destroy({
      where: { id: userId },
    });
    if (deletedRowCount > 0) {
      res.status(200).json({
        message: "User deleted successfully",
      });
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

module.exports = users;
