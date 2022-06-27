import { createRoot } from "react-dom";
import { App } from "./App";
import { GetSummonerByNameDocument } from "./generated/graphql";
import { gqlClient } from "./utils/gqlClient";

const initTg = () => {
  console.log("Initializing TG");

  if (!window.Telegram?.WebApp) {
    return;
  }

  const tg = window.Telegram.WebApp;
  tg.expand();

  gqlClient.query({
    query: GetSummonerByNameDocument,
    variables: {
        name: "ДАЙТЕ ПОИГРАТЬ"
    }
  }).then(console.log)
};

const root = createRoot(document.body);
root.render(<App />);

initTg();

window.gqlClient = gqlClient;
window.GetSummonerByNameDocument = GetSummonerByNameDocument;