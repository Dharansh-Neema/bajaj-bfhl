const dataSeperate = require("../utils/dataSeperate");

exports.getOperation = async (req, res) => {
  try {
    res.json({
      operation_code: "1",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      is_success: false,
      message: "Internal Server Error",
    });
  }
};

exports.postOperation = async (req, res) => {
  try {
    const { data } = req.body;

    // Extract numbers and alphabets from the data
    const { numbers, alphabets } =
      dataSeperate.separateNumbersAndAlphabets(data);

    // Find the highest lowercase alphabet
    const highestLowercaseAlphabet =
      dataSeperate.findHighestLowercaseAlphabet(alphabets);
    const response = {
      is_success: true,
      user_id: "dharansh_neema_21BCE3724",
      email: "dharanshneema@gmail.com",
      roll_number: "21BCE3724",
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highestLowercaseAlphabet,
    };

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      is_success: false,
      message: "Internal Server Error",
    });
  }
};
