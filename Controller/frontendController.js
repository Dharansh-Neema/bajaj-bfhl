const axios = require("axios");

exports.renderIndex = (req, res) => {
  res.render("index", { title: "21BCE3724", error: null, data: null });
};

exports.handleFormSubmission = async (req, res) => {
  const jsonInput = req.body.jsonInput;
  let parsedData;

  // JSON Parsing with Error Handling
  try {
    parsedData = JSON.parse(jsonInput);

    if (!parsedData || !parsedData.data) {
      throw new Error("Missing 'data' property in JSON");
    }
  } catch (error) {
    return res.render("index", {
      title: "21BCE3724",
      error: "Invalid JSON format or missing 'data' property",
      data: null,
    });
  }

  // API Call with Error Handling
  try {
    const response = await axios.post(
      "https://bajaj-bfhl-ot3m.onrender.com/api/v1/bfhl",
      {
        data: parsedData.data,
      }
    );

    const responseData = response.data;

    res.render("result", {
      title: "21BCE3724",
      data: responseData,
      selectedOptions: [], // Ensure this is handled in your result.ejs
    });
  } catch (error) {
    console.error("API call error:", error); // Log the actual error

    res.render("index", {
      title: "21BCE3724",
      error: "Error calling the API",
      data: null,
    });
  }
};
