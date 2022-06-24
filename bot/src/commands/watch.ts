import { Context } from "telegraf";
import { GetSummonerByNameDocument } from "../generated/graphql";
import { cache } from "../utils/cache";
import { CommandData } from "../utils/commandMiddleware";
import { gqlClient } from "../utils/gqlClient";

export const watch = async <C extends Context>(
  ctx: C,
  commandData: CommandData
) => {
  const user = ctx.message.from.id;
  console.log(commandData.args);

  const req = await gqlClient.query({
    query: GetSummonerByNameDocument,
    variables: {
      name: commandData.args,
    },
  });
  console.log(req);

  if (!req.data.getSummonerByName) {
    throw new Error("Summoner is not found, check the name and try again");
  }

  cache.set(`${user}_summoner`, req.data.getSummonerByName.id);

  ctx
    .reply(`Now watching: ${commandData.args}`)
    .then((message) => ctx.pinChatMessage(message.message_id));
};
