import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AccountDto = {
  __typename?: 'AccountDto';
  name: Scalars['String'];
};

export type ActiveShardDto = {
  __typename?: 'ActiveShardDto';
  name: Scalars['String'];
};

export type BanDto = {
  __typename?: 'BanDto';
  championId: Scalars['Int'];
  pickTurn: Scalars['Int'];
};

export type BanRate = {
  __typename?: 'BanRate';
  championID: Scalars['String'];
  percentage: Scalars['Int'];
};

export type BannedChampion = {
  __typename?: 'BannedChampion';
  championId: Scalars['Float'];
  pickTurn: Scalars['Int'];
  teamId: Scalars['Float'];
};

export type ChampionMasteryDto = {
  __typename?: 'ChampionMasteryDto';
  championId: Scalars['Float'];
  championLevel: Scalars['Int'];
  championPoints: Scalars['Int'];
  championPointsSinceLastLevel: Scalars['Float'];
  championPointsUntilNextLevel: Scalars['Float'];
  chestGranted: Scalars['Boolean'];
  lastPlayTime: Scalars['Float'];
  summonerId: Scalars['String'];
  tokensEarned: Scalars['Int'];
};

export type CurrentGameInfo = {
  __typename?: 'CurrentGameInfo';
  bannedChampions: Array<BannedChampion>;
  gameId: Scalars['Float'];
  gameLength: Scalars['Float'];
  gameMode: Scalars['String'];
  gameQueueConfigId: Scalars['Float'];
  gameStartTime: Scalars['Float'];
  gameType: Scalars['String'];
  mapId: Scalars['Float'];
  observers?: Maybe<Observer>;
  participants: Array<CurrentGameParticipant>;
  platformId: Scalars['String'];
};

export type CurrentGameParticipant = {
  __typename?: 'CurrentGameParticipant';
  bot: Scalars['Boolean'];
  championId: Scalars['Float'];
  gameCustomizationObjects: Array<GameCustomizationObject>;
  perks?: Maybe<Perks>;
  profileIconId: Scalars['Float'];
  spell1Id: Scalars['Float'];
  spell2Id: Scalars['Float'];
  summonerId: Scalars['String'];
  summonerName: Scalars['String'];
  teamId: Scalars['Float'];
};

export type GameCustomizationObject = {
  __typename?: 'GameCustomizationObject';
  category: Scalars['String'];
  content: Scalars['String'];
};

export type InfoDto = {
  __typename?: 'InfoDto';
  gameCreation: Scalars['Float'];
  gameDuration: Scalars['Float'];
  gameEndTimestamp: Scalars['Float'];
  gameId: Scalars['Float'];
  gameMode: Scalars['String'];
  gameName: Scalars['String'];
  gameStartTimestamp: Scalars['Float'];
  gameType: Scalars['String'];
  gameVersion: Scalars['String'];
  mapId: Scalars['Int'];
  participants: Array<ParticipantDto>;
  platformId: Scalars['String'];
  queueId: Scalars['Int'];
  teams: Array<TeamDto>;
  tournamentCode: Scalars['String'];
};

export type LeagueEntryDto = {
  __typename?: 'LeagueEntryDTO';
  freshBlood: Scalars['Boolean'];
  hotStreak: Scalars['Boolean'];
  inactive: Scalars['Boolean'];
  leagueId: Scalars['String'];
  leaguePoints: Scalars['Int'];
  losses: Scalars['Int'];
  miniSeries: MiniSeriesDto;
  queueType: QueueType;
  rank: Rank;
  summonerId: Scalars['String'];
  summonerName: Scalars['String'];
  tier: Scalars['String'];
  veteran: Scalars['Boolean'];
  wins: Scalars['Int'];
};

export type MasteryData = {
  __typename?: 'MasteryData';
  championID: Scalars['String'];
  level: Scalars['Int'];
  points: Scalars['Int'];
};

export type MatchData = {
  __typename?: 'MatchData';
  participants: Array<Array<PlayerAnalisys>>;
};

export type MatchDto = {
  __typename?: 'MatchDto';
  info?: Maybe<InfoDto>;
  metadata?: Maybe<MetadataDto>;
};

export type MatchupData = {
  __typename?: 'MatchupData';
  WR: Scalars['Int'];
  againstChampionID: Scalars['Int'];
  played: Scalars['Int'];
  withChampionID: Scalars['Int'];
};

export type MetadataDto = {
  __typename?: 'MetadataDto';
  dataVersion?: Maybe<Scalars['String']>;
  matchId?: Maybe<Scalars['String']>;
  participants?: Maybe<Array<Scalars['String']>>;
};

export type MiniSeriesDto = {
  __typename?: 'MiniSeriesDTO';
  losses: Scalars['Int'];
  progress: Scalars['String'];
  target: Scalars['Int'];
  wins: Scalars['Int'];
};

export type ObjectiveDto = {
  __typename?: 'ObjectiveDto';
  first: Scalars['Boolean'];
  kills?: Maybe<Scalars['Int']>;
};

export type ObjectivesDto = {
  __typename?: 'ObjectivesDto';
  baron?: Maybe<ObjectiveDto>;
  champion?: Maybe<ObjectiveDto>;
  dragon?: Maybe<ObjectiveDto>;
  inhibitor?: Maybe<ObjectiveDto>;
  riftHerald?: Maybe<ObjectiveDto>;
  tower?: Maybe<ObjectiveDto>;
};

export type Observer = {
  __typename?: 'Observer';
  encryptionKey: Scalars['String'];
};

export type ParticipantDto = {
  __typename?: 'ParticipantDto';
  assists: Scalars['Int'];
  baronKills: Scalars['Int'];
  bountyLevel: Scalars['Int'];
  champExperience: Scalars['Int'];
  champLevel: Scalars['Int'];
  championId: Scalars['Int'];
  championName: Scalars['String'];
  championTransform: Scalars['Int'];
  consumablesPurchased: Scalars['Int'];
  damageDealtToBuildings: Scalars['Int'];
  damageDealtToObjectives: Scalars['Int'];
  damageDealtToTurrets: Scalars['Int'];
  damageSelfMitigated: Scalars['Int'];
  deaths: Scalars['Int'];
  detectorWardsPlaced: Scalars['Int'];
  doubleKills: Scalars['Int'];
  dragonKills: Scalars['Int'];
  firstBloodAssist: Scalars['Boolean'];
  firstBloodKill: Scalars['Boolean'];
  firstTowerAssist: Scalars['Boolean'];
  firstTowerKill: Scalars['Boolean'];
  gameEndedInEarlySurrender: Scalars['Boolean'];
  gameEndedInSurrender: Scalars['Boolean'];
  goldEarned: Scalars['Int'];
  goldSpent: Scalars['Int'];
  individualPosition: Scalars['String'];
  inhibitorKills: Scalars['Int'];
  inhibitorTakedowns: Scalars['Int'];
  inhibitorsLost: Scalars['Int'];
  item0: Scalars['Int'];
  item1: Scalars['Int'];
  item2: Scalars['Int'];
  item3: Scalars['Int'];
  item4: Scalars['Int'];
  item5: Scalars['Int'];
  item6: Scalars['Int'];
  itemsPurchased: Scalars['Int'];
  killingSprees: Scalars['Int'];
  kills: Scalars['Int'];
  lane: Scalars['String'];
  largestCriticalStrike: Scalars['Int'];
  largestKillingSpree: Scalars['Int'];
  largestMultiKill: Scalars['Int'];
  longestTimeSpentLiving: Scalars['Int'];
  magicDamageDealt: Scalars['Int'];
  magicDamageDealtToChampions: Scalars['Int'];
  magicDamageTaken: Scalars['Int'];
  neutralMinionsKilled: Scalars['Int'];
  nexusKills: Scalars['Int'];
  nexusLost: Scalars['Int'];
  nexusTakedowns: Scalars['Int'];
  objectivesStolen: Scalars['Int'];
  objectivesStolenAssists: Scalars['Int'];
  participantId: Scalars['Int'];
  pentaKills: Scalars['Int'];
  perks?: Maybe<PerksDto>;
  physicalDamageDealt: Scalars['Int'];
  physicalDamageDealtToChampions: Scalars['Int'];
  physicalDamageTaken: Scalars['Int'];
  profileIcon: Scalars['Int'];
  puuid: Scalars['String'];
  quadraKills: Scalars['Int'];
  riotIdName: Scalars['String'];
  riotIdTagline: Scalars['String'];
  role: Scalars['String'];
  sightWardsBoughtInGame: Scalars['Int'];
  spell1Casts: Scalars['Int'];
  spell2Casts: Scalars['Int'];
  spell3Casts: Scalars['Int'];
  spell4Casts: Scalars['Int'];
  summoner1Casts: Scalars['Int'];
  summoner1Id: Scalars['Int'];
  summoner2Casts: Scalars['Int'];
  summoner2Id: Scalars['Int'];
  summonerId: Scalars['String'];
  summonerLevel: Scalars['Int'];
  summonerName: Scalars['String'];
  teamEarlySurrendered: Scalars['Boolean'];
  teamId: Scalars['Int'];
  teamPosition: Scalars['String'];
  timeCCingOthers: Scalars['Int'];
  timePlayed: Scalars['Int'];
  totalDamageDealt: Scalars['Int'];
  totalDamageDealtToChampions: Scalars['Int'];
  totalDamageShieldedOnTeammates: Scalars['Int'];
  totalDamageTaken: Scalars['Int'];
  totalHeal: Scalars['Int'];
  totalHealsOnTeammates: Scalars['Int'];
  totalMinionsKilled: Scalars['Int'];
  totalTimeCCDealt: Scalars['Int'];
  totalTimeSpentDead: Scalars['Int'];
  totalUnitsHealed: Scalars['Int'];
  tripleKills: Scalars['Int'];
  trueDamageDealt: Scalars['Int'];
  trueDamageDealtToChampions: Scalars['Int'];
  trueDamageTaken: Scalars['Int'];
  turretKills: Scalars['Int'];
  turretTakedowns: Scalars['Int'];
  turretsLost: Scalars['Int'];
  unrealKills: Scalars['Int'];
  visionScore: Scalars['Int'];
  visionWardsBoughtInGame: Scalars['Int'];
  wardsKilled: Scalars['Int'];
  wardsPlaced: Scalars['Int'];
  win: Scalars['Boolean'];
};

export type PerkStatsDto = {
  __typename?: 'PerkStatsDto';
  defense: Scalars['Int'];
  flex: Scalars['Int'];
  offense: Scalars['Int'];
};

export type PerkStyleDto = {
  __typename?: 'PerkStyleDto';
  description: Scalars['String'];
  selections: Array<PerkStyleSelectionDto>;
  style: Scalars['Int'];
};

export type PerkStyleSelectionDto = {
  __typename?: 'PerkStyleSelectionDto';
  perk: Scalars['Int'];
  var1: Scalars['Int'];
  var2: Scalars['Int'];
  var3: Scalars['Int'];
};

export type Perks = {
  __typename?: 'Perks';
  perkIds: Array<Scalars['Float']>;
  perkStyle: Scalars['Float'];
  perkSubStyle: Scalars['Float'];
};

export type PerksDto = {
  __typename?: 'PerksDto';
  statPerks?: Maybe<PerkStatsDto>;
  styles: Array<PerkStyleDto>;
};

export type PlayerAnalisys = {
  __typename?: 'PlayerAnalisys';
  ID: Scalars['String'];
  WR: Scalars['Int'];
  banChart: Array<BanRate>;
  createdAt: Scalars['String'];
  history: Array<Scalars['String']>;
  level: Scalars['Int'];
  masteriesChart: Array<MasteryData>;
  matchupChart: Array<MatchupData>;
  name: Scalars['String'];
  playedWith: Array<Scalars['String']>;
  rank: Scalars['String'];
  tags: Array<Scalars['String']>;
  totalGames: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  dummy: Scalars['String'];
  getAccountByPUUID?: Maybe<AccountDto>;
  getAccountByRiotID?: Maybe<AccountDto>;
  getActiveGameBySummonerID?: Maybe<CurrentGameInfo>;
  getActiveGameBySummonerName?: Maybe<CurrentGameInfo>;
  getActiveShard?: Maybe<ActiveShardDto>;
  getAllMasteriesBySummonerID: Array<ChampionMasteryDto>;
  getChampionMasteryBySummonerID?: Maybe<ChampionMasteryDto>;
  getCurrentMatchBySummonerID?: Maybe<MatchData>;
  getLeagueEntryBySummonerID: Array<LeagueEntryDto>;
  getMatchByID?: Maybe<MatchDto>;
  getMatchIDsByPUUID: Array<Scalars['String']>;
  getMyAccount?: Maybe<AccountDto>;
  getPlayerAnalysisByID?: Maybe<PlayerAnalisys>;
  getSummonerByAccountID?: Maybe<SummonerDto>;
  getSummonerByID?: Maybe<SummonerDto>;
  getSummonerByName?: Maybe<SummonerDto>;
  getTotalMasteryPointsBySummonerID: Scalars['Int'];
};


export type QueryDummyArgs = {
  foo?: InputMaybe<Scalars['String']>;
};


export type QueryGetAccountByPuuidArgs = {
  puuid: Scalars['String'];
};


export type QueryGetAccountByRiotIdArgs = {
  riotID: Scalars['String'];
};


export type QueryGetActiveGameBySummonerIdArgs = {
  summonerID: Scalars['String'];
};


export type QueryGetActiveGameBySummonerNameArgs = {
  name: Scalars['String'];
};


export type QueryGetActiveShardArgs = {
  game: Scalars['String'];
  puuid: Scalars['String'];
};


export type QueryGetAllMasteriesBySummonerIdArgs = {
  summonerID: Scalars['String'];
};


export type QueryGetChampionMasteryBySummonerIdArgs = {
  championID: Scalars['String'];
  summonerID: Scalars['String'];
};


export type QueryGetCurrentMatchBySummonerIdArgs = {
  ID: Scalars['String'];
};


export type QueryGetLeagueEntryBySummonerIdArgs = {
  ID: Scalars['String'];
};


export type QueryGetMatchByIdArgs = {
  matchID: Scalars['String'];
};


export type QueryGetMatchIDsByPuuidArgs = {
  puuid: Scalars['String'];
};


export type QueryGetPlayerAnalysisByIdArgs = {
  ID: Scalars['String'];
};


export type QueryGetSummonerByAccountIdArgs = {
  encryptedAccountId: Scalars['String'];
};


export type QueryGetSummonerByIdArgs = {
  ID: Scalars['String'];
};


export type QueryGetSummonerByNameArgs = {
  name: Scalars['String'];
};

export enum QueueType {
  RankedSolo_5x5 = 'RANKED_SOLO_5x5',
  RankedTeam_5x5 = 'RANKED_TEAM_5x5'
}

export enum Rank {
  Bronze = 'BRONZE',
  Challenger = 'CHALLENGER',
  Diamond = 'DIAMOND',
  Gold = 'GOLD',
  Grandmaster = 'GRANDMASTER',
  Iron = 'IRON',
  Master = 'MASTER',
  Platinum = 'PLATINUM',
  Silver = 'SILVER',
  Unranked = 'UNRANKED'
}

export type SummonerDto = {
  __typename?: 'SummonerDTO';
  accountId: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  profileIconId: Scalars['Int'];
  puuid: Scalars['String'];
  revisionDate: Scalars['Float'];
  summonerLevel: Scalars['Float'];
};

export type TeamDto = {
  __typename?: 'TeamDto';
  bans: Array<BanDto>;
  objectives?: Maybe<ObjectivesDto>;
  teamId: Scalars['Int'];
  win: Scalars['Boolean'];
};

export type GetActiveGameBySummonerIdQueryVariables = Exact<{
  summonerID: Scalars['String'];
}>;


export type GetActiveGameBySummonerIdQuery = { __typename?: 'Query', getActiveGameBySummonerID?: { __typename?: 'CurrentGameInfo', gameId: number, gameType: string, gameStartTime: number, participants: Array<{ __typename?: 'CurrentGameParticipant', championId: number, summonerName: string, summonerId: string, teamId: number }> } | null };

export type GetActiveGameBySummonerNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetActiveGameBySummonerNameQuery = { __typename?: 'Query', getActiveGameBySummonerName?: { __typename?: 'CurrentGameInfo', gameId: number, gameType: string, gameStartTime: number, participants: Array<{ __typename?: 'CurrentGameParticipant', championId: number, summonerName: string, summonerId: string, teamId: number }> } | null };

export type GetSummonerByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetSummonerByNameQuery = { __typename?: 'Query', getSummonerByName?: { __typename?: 'SummonerDTO', accountId: string, profileIconId: number, revisionDate: number, name: string, id: string, puuid: string, summonerLevel: number } | null };

export type GetSummonerByIdQueryVariables = Exact<{
  ID: Scalars['String'];
}>;


export type GetSummonerByIdQuery = { __typename?: 'Query', getSummonerByID?: { __typename?: 'SummonerDTO', accountId: string, profileIconId: number, revisionDate: number, name: string, id: string, puuid: string, summonerLevel: number } | null };

export type GetCurrentMatchBySummonerIdQueryVariables = Exact<{
  ID: Scalars['String'];
}>;


export type GetCurrentMatchBySummonerIdQuery = { __typename?: 'Query', getCurrentMatchBySummonerID?: { __typename?: 'MatchData', participants: Array<Array<{ __typename?: 'PlayerAnalisys', name: string, ID: string, history: Array<string>, createdAt: string, tags: Array<string>, rank: string, WR: number, playedWith: Array<string>, totalGames: number, level: number, masteriesChart: Array<{ __typename?: 'MasteryData', championID: string, level: number, points: number }>, banChart: Array<{ __typename?: 'BanRate', championID: string, percentage: number }>, matchupChart: Array<{ __typename?: 'MatchupData', WR: number, withChampionID: number, againstChampionID: number, played: number }> }>> } | null };


export const GetActiveGameBySummonerIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getActiveGameBySummonerID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"summonerID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getActiveGameBySummonerID"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"summonerID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"summonerID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gameId"}},{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"championId"}},{"kind":"Field","name":{"kind":"Name","value":"summonerName"}},{"kind":"Field","name":{"kind":"Name","value":"summonerId"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gameType"}},{"kind":"Field","name":{"kind":"Name","value":"gameStartTime"}}]}}]}}]} as unknown as DocumentNode<GetActiveGameBySummonerIdQuery, GetActiveGameBySummonerIdQueryVariables>;
export const GetActiveGameBySummonerNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getActiveGameBySummonerName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getActiveGameBySummonerName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gameId"}},{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"championId"}},{"kind":"Field","name":{"kind":"Name","value":"summonerName"}},{"kind":"Field","name":{"kind":"Name","value":"summonerId"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gameType"}},{"kind":"Field","name":{"kind":"Name","value":"gameStartTime"}}]}}]}}]} as unknown as DocumentNode<GetActiveGameBySummonerNameQuery, GetActiveGameBySummonerNameQueryVariables>;
export const GetSummonerByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSummonerByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSummonerByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountId"}},{"kind":"Field","name":{"kind":"Name","value":"profileIconId"}},{"kind":"Field","name":{"kind":"Name","value":"revisionDate"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"puuid"}},{"kind":"Field","name":{"kind":"Name","value":"summonerLevel"}}]}}]}}]} as unknown as DocumentNode<GetSummonerByNameQuery, GetSummonerByNameQueryVariables>;
export const GetSummonerByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSummonerByID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSummonerByID"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountId"}},{"kind":"Field","name":{"kind":"Name","value":"profileIconId"}},{"kind":"Field","name":{"kind":"Name","value":"revisionDate"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"puuid"}},{"kind":"Field","name":{"kind":"Name","value":"summonerLevel"}}]}}]}}]} as unknown as DocumentNode<GetSummonerByIdQuery, GetSummonerByIdQueryVariables>;
export const GetCurrentMatchBySummonerIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentMatchBySummonerID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentMatchBySummonerID"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"history"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"masteriesChart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"championID"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"points"}}]}},{"kind":"Field","name":{"kind":"Name","value":"WR"}},{"kind":"Field","name":{"kind":"Name","value":"banChart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"championID"}},{"kind":"Field","name":{"kind":"Name","value":"percentage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"playedWith"}},{"kind":"Field","name":{"kind":"Name","value":"matchupChart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"WR"}},{"kind":"Field","name":{"kind":"Name","value":"withChampionID"}},{"kind":"Field","name":{"kind":"Name","value":"againstChampionID"}},{"kind":"Field","name":{"kind":"Name","value":"played"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalGames"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrentMatchBySummonerIdQuery, GetCurrentMatchBySummonerIdQueryVariables>;