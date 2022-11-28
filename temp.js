// run `node index.js` in the terminal
const axios = require("axios");
const makeAPICall = async () => {
  try {
    const data = await axios.post(
      "https://3vbz0ktq66.execute-api.us-east-1.amazonaws.com/dev/user",
      {
        "age": 22,
        "height": 6,
        "income": 400000,
      }
    );
    console.log(data.data);
  } catch (error) {
    console.log(error);
  }
};
makeAPICall();
console.log(`Hello Node.js v${process.versions.node}!`);
