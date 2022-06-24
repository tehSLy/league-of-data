import { config } from "../config";
import {
  CurrentGameInfo,
  LeagueEntryDto,
  SummonerDto,
} from "../generated/graphql";
import { HTTPClient } from "../httpClient";

export const createLoLApiInstance = (options: { defaultRegion?: string }) => {
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
      getIDsByPUUID: () => null,
      getMatchByID: () => null,
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
        console.log(url);

        return instance.get<LeagueEntryDto[]>(url);
      },
    },
  };
};
