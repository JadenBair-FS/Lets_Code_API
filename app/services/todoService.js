const axios = require("axios");
require("dotenv").config();

const todoService = async () =>{
    console.log("Joke");
    return await axios.get(`${process.env.jokeURL}`);
};

const todoServiceById = async (id) =>{
    console.log("Joke by ID");
    return await axios.get(`${process.env.jokeIdURL}${id}`)
}

module.exports = {todoService, todoServiceById};