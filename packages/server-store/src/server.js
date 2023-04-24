import express from "express";
import axios from "axios";

import App from "./App.svelte";

const app = express();
const port = 3000;

const middlewareData = async (req, res, next) => {
  if (!req.query.userId) return next();

  const data = await axios
    .get("https://randomuser.me/api")
    .then((response) => response.data);
  req.user = data.results[0];
  next();
};

const middlewareRender = (req, res) => {
  const data = {
    user: req.user || null,
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
        </body>
    </html>
  `);
};

app.get("/", middlewareData, middlewareRender);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
