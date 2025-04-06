const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const body = JSON.parse(event.body);

  const response = await fetch("https://script.google.com/macros/s/AKfycbxxiKGQm2nE6YCFhnLybDJZNJq3cq8BP9vYSvUCvndhP3B0MiNWpwwYE_yb_xu8asLsZw/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const text = await response.text();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: text || "Success" }),
  };
};
