import { Context } from "telegraf";
import {
  GetCurrentMatchBySummonerIdDocument,
  GetSummonerByNameDocument,
} from "../generated/graphql";
import { cache } from "../utils/cache";
import { CommandData } from "../utils/commandMiddleware";
import { gqlClient } from "../utils/gqlClient";

export const game = async <C extends Context>(
  ctx: C,
  commandData: CommandData
) => {

  console.log(commandData);
  
  const summonerID = await resolveSummonerID(
    String(ctx.message?.from.id) || "",
    commandData?.args
  );

  if (!summonerID) {
    return ctx.reply(
      "There is no summoner to check. Use /watch command to define"
    );
  }

  const req = await gqlClient.query({
    query: GetCurrentMatchBySummonerIdDocument,
    variables: {
      ID: summonerID,
    },
  });

  if (!req.data.getCurrentMatchBySummonerID) {
    return ctx.reply("This user is not in game yet");
  }

  let teamId = 1;
  const reply = ["Current game:"];
  for (const teamParticipants of req.data.getCurrentMatchBySummonerID
    .participants) {
    reply.push(`*Team ${teamId++}:*`);
    for (const participant of teamParticipants) {
      reply.push(
        `\`${participant.name}\` \\| WR ${participant.WR}\\% \\(${participant.totalGames}\\)`
      );
    }
  }

  ctx.reply(reply.join("\n"), { parse_mode: "MarkdownV2" });
};

const resolveSummonerID = async (user: string, name?: string) => {
  if (!name) {
    return (await cache.get(`${user}_summoner`)) as string | undefined;
  }

  return gqlClient
    .query({
      query: GetSummonerByNameDocument,
      variables: {
        name,
      },
    })
    .then(({ data }) => {
      if (data.getSummonerByName) {
        return data.getSummonerByName.id;
      }
    });
};
