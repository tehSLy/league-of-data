import { config } from "../config";
import {
  CurrentGameInfo,
  LeagueEntryDto,
  MatchDto,
  SummonerDto,
} from "../generated/graphql";
import { HTTPClient } from "../httpClient";

export type Region = "AMERICAS" | "EUROPE" | "ASIA" | "SEA";
export type RegionIndex =
  | "BR1"
  | "EUN1"
  | "EUW1"
  | "JP1"
  | "KR"
  | "LA1"
  | "LA2"
  | "NA1"
  | "OC1"
  | "RU"
  | "TR1";

export const regionApiUrlMap: Record<Region, string> = {
  AMERICAS: "https://americas.api.riotgames.com",
  ASIA: "https://asia.api.riotgames.com",
  EUROPE: "https://europe.api.riotgames.com",
  SEA: "https://sea.api.riotgames.com",
};

export const regionIdsApiUrlMap: Record<RegionIndex, string> = {
  BR1: "https://br1.api.riotgames.com",
  EUN1: "https://eun1.api.riotgames.com",
  EUW1: "https://euw1.api.riotgames.com",
  JP1: "https://jp1.api.riotgames.com",
  KR: "https://kr.api.riotgames.com",
  LA1: "https://la1.api.riotgames.com",
  LA2: "https://la2.api.riotgames.com",
  NA1: "https://na1.api.riotgames.com",
  OC1: "https://oc1.api.riotgames.com",
  RU: "https://ru.api.riotgames.com",
  TR1: "https://tr1.api.riotgames.com",
};

export const createLoLApiInstance = (options: {
  defaultRegion?: RegionIndex;
}) => {
  const instance = new HTTPClient({
    headers: {
      // @ts-ignore
      common: {
        "X-Riot-Token": config.API_KEY,
      },
    },
  });

  return {
    account: {
      // getByPUUID: (puuid, data?: { region?: string }) => {
      //   const url = `https://${
      //     data.region || options.defaultRegion || "euw1"
      //   }.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}?api_key=${
      //     config.API_KEY
      //   }`;
      //   return instance.get<PlayerByPuuid>(url);
      // },
      // getByRiotID: () => null,
    },
    championMastery: {
      getBySummoner: (encryptedSummonerId: string, championId?: string) => null,
      getScoresBySummoner: (encryptedSummonerId: string) => null,
    },
    champion: {
      getRotation: () => null,
    },
    match: {
      getIDsByPUUID: (
        puuid: string,
        data?: {
          region?: Region;
          startTime?: number;
          endTime?: number;
          queue?: number;
          type?: string;
          start?: number;
          count?: number;
        }
      ) => {
        const region =
          data?.region ||
          resolveRegionByIndex(
            (options.defaultRegion as RegionIndex) || "EUW1"
          );
        const { region: _, ...params } = data || {
          count: 100,
        };
        const url = `https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${encodeURIComponent(
          puuid
        )}/ids`;

        return instance.get<string[]>(url, {
          params,
        });
      },
      getMatchByID: (matchId: string, data?: { region?: Region }) => {
        const region =
          data?.region ||
          resolveRegionByIndex(
            (options.defaultRegion as RegionIndex) || "EUW1"
          );
        const url = `https://${region}.api.riotgames.com/lol/match/v5/matches/${encodeURIComponent(
          matchId
        )}`;

        return instance.get<MatchDto>(url);
      },
      getMatchTimelineById: () => null,
    },
    static: {
      getSeasons: () =>
        "https://static.developer.riotgames.com/docs/lol/seasons.json",
      getQueues: () =>
        "https://static.developer.riotgames.com/docs/lol/queues.json",
      getMaps: () =>
        "https://static.developer.riotgames.com/docs/lol/maps.json",
      getGameModes: () =>
        "https://static.developer.riotgames.com/docs/lol/gameModes.json",
      getGameTypes: () =>
        "https://static.developer.riotgames.com/docs/lol/gameTypes.json",
    },
    spectator: {
      getActiveGameBySummoner: (
        encryptedSummonerId: string,
        data?: { region?: string }
      ) => {
        const url = `https://${
          data?.region || options.defaultRegion || "euw1"
        }.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${encodeURIComponent(
          encryptedSummonerId
        )}`;

        return instance.get<CurrentGameInfo>(url);
      },
    },
    summoner: {
      getByAccountID: (id: string, data?: { region?: string }) => {
        const url = `https://${
          data?.region || options.defaultRegion || "euw1"
        }.api.riotgames.com/lol/summoner/v4/summoners/by-account/${encodeURIComponent(
          id
        )}`;

        return instance.get<SummonerDto>(url);
      },
      getBySummonerName: (name: string, data?: { region?: string }) => {
        const url = `https://${
          data?.region || options.defaultRegion || "euw1"
        }.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURIComponent(
          name
        )}`;

        return instance.get<SummonerDto>(url);
      },
      getByPUUID: () => {},
      getBySummonerID: (ID: string, data?: { region?: string }) => {
        const url = `https://${
          data?.region || options.defaultRegion || "euw1"
        }.api.riotgames.com/lol/summoner/v4/summoners/${encodeURIComponent(
          ID
        )}`;

        return instance.get<SummonerDto>(url);
      },
    },
    league: {
      getLeagueEntryBySummonerID: (ID: string, data?: { region?: string }) => {
        const url = `https://${
          data?.region || options.defaultRegion || "euw1"
        }.api.riotgames.com/lol/league/v4/entries/by-summoner/${encodeURIComponent(
          ID
        )}`;

        return instance.get<LeagueEntryDto[]>(url);
      },
    },
  };
};

const resolveRegionByIndex = (regionIndex: RegionIndex): Region => {
  const idx = regionIndex.toUpperCase() as RegionIndex;
  const map: Record<Region, RegionIndex[]> = {
    AMERICAS: ["LA1", "LA2", "NA1"],
    ASIA: ["KR", "JP1"],
    EUROPE: ["RU", "EUN1", "EUW1", "TR1"],
    SEA: ["BR1", "OC1"],
  };

  for (const region in map) {
    if (map[region as Region].includes(idx)) {
      return region as Region;
    }
  }

  return "EUROPE";
};
