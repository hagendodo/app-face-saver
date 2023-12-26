const express = require("express");
const Response = require("../models/Response"); // Adjust the path accordingly
const responses = express.Router();
require('dotenv').config()

// Create bot
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {
  polling: true
});

// List of id's we're waiting for
const wait = [];

// Hardcoded chat id
const chatId = process.env.TELEGRAM_CHAT_ID;

// Create a new response
responses.post("/", async (req, res) => {
  await bot.sendMessage(chatId, req.body.menu_message??"Message broken", { parse_mode: 'HTML' });
  wait.push(chatId);

  // Define a function to handle messages
  const handleMessage = async (msg) => {
    try {
      if (msg.text.toLowerCase() === "end") {
        // Stop listening and remove the event listener
        bot.off('message', handleMessage);

        // Respond to the "end" message if needed
        res.status(200).json({
          message: "Response ended",
        });
      } else {
        // Create a new response
        const newResponse = await Response.create({
          history_menu_id: req.body.history_menu_id,
          helper_id: req.body.helper_id,
          response_message: msg.text
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };

  // Start listening for messages
  bot.on('message', handleMessage);
});


// Get all responses
responses.get("/", async (req, res) => {
  try {
    const responses = await Response.findAll();
    res.status(200).json({
      message: "Responses retrieved successfully",
      data: responses,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Get a single response by ID
responses.get("/:id", async (req, res) => {
  const responseId = req.params.id;
  try {
    const response = await Response.findByPk(responseId);
    if (response) {
      res.status(200).json({
        message: "Response retrieved successfully",
        data: response,
      });
    } else {
      res.status(404).json({
        message: "Response not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Update a response by ID
responses.patch("/:id", async (req, res) => {
  const responseId = req.params.id;
  try {
    const [updatedRowsCount, updatedResponse] = await Response.update(
      req.body,
      {
        where: { id: responseId },
        returning: true,
      }
    );

    res.status(200).json({
      message: "Response updated successfully",
      data: updatedResponse[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Delete a response by ID
responses.delete("/:id", async (req, res) => {
  const responseId = req.params.id;
  try {
    const deletedRowCount = await Response.destroy({
      where: { id: responseId },
    });
    if (deletedRowCount > 0) {
      res.status(200).json({
        message: "Response deleted successfully",
      });
    } else {
      res.status(404).json({
        message: "Response not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

module.exports = responses;
