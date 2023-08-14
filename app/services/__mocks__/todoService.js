const axios = require("axios");
require("dotenv").config();

const todoService = async () => {
  console.log("Mocked Joke");
  return Promise.resolve({
    data: {
      type: "general",
      setup:
        "A ham sandwhich walks into a bar and orders a beer. The bartender says...",
      punchline: "I'm sorry, we don't serve food here",
      id: 43,
    },
  });
};

const todoServiceById = async (id) => {
  console.log("Mocked Joke by ID");
  return await Promise.resolve({
    data: {
      type: "general",
      setup:
        "A ham sandwhich walks into a bar and orders a beer. The bartender says...",
      punchline: "I'm sorry, we don't serve food here",
      id: 43,
    },
  });
};

module.exports = { todoService, todoServiceById };
