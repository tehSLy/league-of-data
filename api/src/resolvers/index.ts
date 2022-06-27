import { LoLApi } from "../lolApi";
import {
  createResolver,
  mergeResolvers,
  QueryResolvers,
} from "./createResolver";
import { MatchDataResolver } from "./MatchData";
import { PlayerAnalysisResolver } from "./PlayerAnalysis/PlayerAnalysisResolver";

const getSummonerByName = createResolver<QueryResolvers["getSummonerByName"]>(
  ({ name }) => {
    console.log("name");

    return LoLApi.summoner.getBySummonerName(name);
  }
);

const getActiveGameBySummonerID = createResolver<
  QueryResolvers["getActiveGameBySummonerID"]
>(({ summonerID }) => {
  return LoLApi.spectator.getActiveGameBySummoner(summonerID);
});

const getActiveGameBySummonerName = createResolver<
  QueryResolvers["getActiveGameBySummonerName"]
>(async ({ name }) => {
  const summoner = await LoLApi.summoner.getBySummonerName(name);
  if (!summoner) {
    return null;
  }

  return LoLApi.spectator.getActiveGameBySummoner(summoner.id);
});

const getSummonerByID = createResolver<QueryResolvers["getSummonerByID"]>(
  ({ ID }) => {
    return LoLApi.summoner.getByAccountID(ID);
  }
);

export const resolvers = mergeResolvers({
  getSummonerByName,
  getActiveGameBySummonerID,
  getSummonerByID,
  getActiveGameBySummonerName,
  getPlayerAnalysisByID: PlayerAnalysisResolver,
  getCurrentMatchBySummonerID: MatchDataResolver,
});
