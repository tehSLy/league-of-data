import { LeagueEntryDto, QueueType } from "../../generated/graphql";
import { LoLApi } from "../../lolApi";

export const getPlayerAnalysis = async ({
  ID,
}: {
  ID: string;
  region?: string;
}) => {
  const leagueInfo = await LoLApi.league.getLeagueEntryBySummonerID(ID);
  const summonerInfo = await LoLApi.summoner.getBySummonerID(ID);

  const response = {
    banChart: [],
    createdAt: "",
    history: [],
    ID: ID,
    masteriesChart: [],
    name: "",
    playedWith: [],
    rank: "",
    tags: [],
    WR: 0,
    level: 0,
    matchupChart: [],
    totalGames: 0,
  };

  const soloq = resolveSoloQ(leagueInfo);

  if (soloq) {
    const totalGames = soloq.wins + soloq.losses;
    const WR = Math.round((soloq.wins * 100) / totalGames);
    const leaguePoints = soloq.leaguePoints;

    Object.assign(response, {
      totalGames,
      WR,
      leaguePoints,
    });
  }

  if (summonerInfo) {
    Object.assign(response, {
      name: summonerInfo.name,
      level: summonerInfo.summonerLevel,
    });
  }

  return response;
};

const resolveSoloQ = (DTOs: LeagueEntryDto[] = []) => {
  const soloq = DTOs.find((dto) => dto.queueType === QueueType.RankedSolo_5x5);
  return soloq;
};
