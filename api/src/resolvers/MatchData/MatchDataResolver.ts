import { PlayerAnalisys } from "../../generated/graphql";
import { LoLApi } from "../../lolApi";
import { createResolver, QueryResolvers } from "../createResolver";
import { getPlayerAnalysis } from "../PlayerAnalysis/getPlayerAnalysis";

export const MatchDataResolver = createResolver<
  QueryResolvers["getCurrentMatchBySummonerID"]
>(async ({ ID }) => {
  const match = await LoLApi.spectator.getActiveGameBySummoner(ID);

  const response = {
    participants: [],
  };

  if (match) {
    const participantsByTeams = {} as Record<string, PlayerAnalisys[]>;
    for (const participant of match.participants) {
      const playerData = await getPlayerAnalysis({
        ID: participant.summonerId,
      });
      if (!participantsByTeams[participant.teamId]) {
        participantsByTeams[participant.teamId] = [];
      }
      participantsByTeams[participant.teamId].push(playerData);
    }

    Object.assign(response, {
      participants: Object.values(participantsByTeams),
    });
  }

  return response;
});
