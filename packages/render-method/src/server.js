require("svelte/register");
const express = require("express");
const path = require("path");
const axios = require("axios").default;

const App = require("./App.svelte").default;

const app = express();
const port = 3000;

const middlewareData = async (req, res, next) => {
  const data = await axios
    .get("https://randomuser.me/api")
    .then((response) => response.data);
  req.user = data.results[0];
  next();
};

const middlewareRender = (req, res) => {
  const data = {
    user: req.user,
  };

  const { html, head, css } = App.render(data);

  return res.send(`
    <!doctype html>
    <html lang="fr">
        <head>
            <meta charset="utf-8">
            <style>${css.code}</style>
            ${head}
        </head>
        <body>
            <div id="app">
                ${html}
            </div>
            <script id="__data__" type="application/json">${JSON.stringify(
              data
            )}</script>
            <script src="/assets/script.js"></script>
        </body>
    </html>
  `);
};

app.use("/assets", express.static(path.join(__dirname, "..", "build")));

app.get("/", middlewareData, middlewareRender);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
