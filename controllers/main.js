const CustomAPIError = require("../errors/custom-error");
const login = async (req, res) => {
  const username = req.body["username"];
  const password = req.body["password"];

  if (!username || password) {
    throw new CustomAPIError("Please provide username and password", 400);
  }

  console.log(username, password);
  res.send("Fake LogIn");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
