const axios = require("axios");

exports.renderIndex = (req, res) => {
  res.render("index", { title: "21BCE3724", error: null, data: null });
};

exports.handleFormSubmission = async (req, res) => {
  const jsonInput = req.body.jsonInput;
  let parsedData;

  try {
    parsedData = JSON.parse(jsonInput);
  } catch (error) {
    return res.render("index", {
      title: "21BCE3724",
      error: "Invalid JSON format",
      data: null,
    });
  }

  try {
    const response = await axios.post("http://localhost:3000/api/v1/bfhl", {
      data: parsedData.data,
    });
    const responseData = response.data;
    res.render("result", {
      title: "21BCE3724",
      data: responseData,
      selectedOptions: [],
    });
  } catch (error) {
    res.render("index", {
      title: "21BCE3724",
      error: "Error calling the API",
      data: null,
    });
  }
};
