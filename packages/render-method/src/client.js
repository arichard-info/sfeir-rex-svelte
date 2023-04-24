import App from "./App.svelte";

const init = () => {
  const data = JSON.parse(document.getElementById("__data__")?.innerText);
  const app = new App({
    target: document.getElementById("app"),
    hydrate: true,
    props: data,
  });
};

init();
