import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccountDto: ResolverTypeWrapper<AccountDto>;
  ActiveShardDto: ResolverTypeWrapper<ActiveShardDto>;
  BanDto: ResolverTypeWrapper<BanDto>;
  BanRate: ResolverTypeWrapper<BanRate>;
  BannedChampion: ResolverTypeWrapper<BannedChampion>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ChampionMasteryDto: ResolverTypeWrapper<ChampionMasteryDto>;
  CurrentGameInfo: ResolverTypeWrapper<CurrentGameInfo>;
  CurrentGameParticipant: ResolverTypeWrapper<CurrentGameParticipant>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GameCustomizationObject: ResolverTypeWrapper<GameCustomizationObject>;
  InfoDto: ResolverTypeWrapper<InfoDto>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LeagueEntryDTO: ResolverTypeWrapper<LeagueEntryDto>;
  MasteryData: ResolverTypeWrapper<MasteryData>;
  MatchData: ResolverTypeWrapper<MatchData>;
  MatchDto: ResolverTypeWrapper<MatchDto>;
  MatchupData: ResolverTypeWrapper<MatchupData>;
  MetadataDto: ResolverTypeWrapper<MetadataDto>;
  MiniSeriesDTO: ResolverTypeWrapper<MiniSeriesDto>;
  ObjectiveDto: ResolverTypeWrapper<ObjectiveDto>;
  ObjectivesDto: ResolverTypeWrapper<ObjectivesDto>;
  Observer: ResolverTypeWrapper<Observer>;
  ParticipantDto: ResolverTypeWrapper<ParticipantDto>;
  PerkStatsDto: ResolverTypeWrapper<PerkStatsDto>;
  PerkStyleDto: ResolverTypeWrapper<PerkStyleDto>;
  PerkStyleSelectionDto: ResolverTypeWrapper<PerkStyleSelectionDto>;
  Perks: ResolverTypeWrapper<Perks>;
  PerksDto: ResolverTypeWrapper<PerksDto>;
  PlayerAnalisys: ResolverTypeWrapper<PlayerAnalisys>;
  Query: ResolverTypeWrapper<{}>;
  QueueType: QueueType;
  Rank: Rank;
  String: ResolverTypeWrapper<Scalars['String']>;
  SummonerDTO: ResolverTypeWrapper<SummonerDto>;
  TeamDto: ResolverTypeWrapper<TeamDto>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccountDto: AccountDto;
  ActiveShardDto: ActiveShardDto;
  BanDto: BanDto;
  BanRate: BanRate;
  BannedChampion: BannedChampion;
  Boolean: Scalars['Boolean'];
  ChampionMasteryDto: ChampionMasteryDto;
  CurrentGameInfo: CurrentGameInfo;
  CurrentGameParticipant: CurrentGameParticipant;
  Float: Scalars['Float'];
  GameCustomizationObject: GameCustomizationObject;
  InfoDto: InfoDto;
  Int: Scalars['Int'];
  LeagueEntryDTO: LeagueEntryDto;
  MasteryData: MasteryData;
  MatchData: MatchData;
  MatchDto: MatchDto;
  MatchupData: MatchupData;
  MetadataDto: MetadataDto;
  MiniSeriesDTO: MiniSeriesDto;
  ObjectiveDto: ObjectiveDto;
  ObjectivesDto: ObjectivesDto;
  Observer: Observer;
  ParticipantDto: ParticipantDto;
  PerkStatsDto: PerkStatsDto;
  PerkStyleDto: PerkStyleDto;
  PerkStyleSelectionDto: PerkStyleSelectionDto;
  Perks: Perks;
  PerksDto: PerksDto;
  PlayerAnalisys: PlayerAnalisys;
  Query: {};
  String: Scalars['String'];
  SummonerDTO: SummonerDto;
  TeamDto: TeamDto;
};

export type AccountDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountDto'] = ResolversParentTypes['AccountDto']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActiveShardDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActiveShardDto'] = ResolversParentTypes['ActiveShardDto']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BanDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['BanDto'] = ResolversParentTypes['BanDto']> = {
  championId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pickTurn?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BanRateResolvers<ContextType = any, ParentType extends ResolversParentTypes['BanRate'] = ResolversParentTypes['BanRate']> = {
  championID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  percentage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BannedChampionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BannedChampion'] = ResolversParentTypes['BannedChampion']> = {
  championId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pickTurn?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChampionMasteryDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChampionMasteryDto'] = ResolversParentTypes['ChampionMasteryDto']> = {
  championId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  championLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  championPoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  championPointsSinceLastLevel?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  championPointsUntilNextLevel?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  chestGranted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastPlayTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokensEarned?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrentGameInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentGameInfo'] = ResolversParentTypes['CurrentGameInfo']> = {
  bannedChampions?: Resolver<Array<ResolversTypes['BannedChampion']>, ParentType, ContextType>;
  gameId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameLength?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameMode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gameQueueConfigId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameStartTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mapId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  observers?: Resolver<Maybe<ResolversTypes['Observer']>, ParentType, ContextType>;
  participants?: Resolver<Array<ResolversTypes['CurrentGameParticipant']>, ParentType, ContextType>;
  platformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrentGameParticipantResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentGameParticipant'] = ResolversParentTypes['CurrentGameParticipant']> = {
  bot?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  championId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameCustomizationObjects?: Resolver<Array<ResolversTypes['GameCustomizationObject']>, ParentType, ContextType>;
  perks?: Resolver<Maybe<ResolversTypes['Perks']>, ParentType, ContextType>;
  profileIconId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  spell1Id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  spell2Id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GameCustomizationObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['GameCustomizationObject'] = ResolversParentTypes['GameCustomizationObject']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InfoDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['InfoDto'] = ResolversParentTypes['InfoDto']> = {
  gameCreation?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameDuration?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameEndTimestamp?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameMode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gameName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gameStartTimestamp?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gameVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mapId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  participants?: Resolver<Array<ResolversTypes['ParticipantDto']>, ParentType, ContextType>;
  platformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  queueId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teams?: Resolver<Array<ResolversTypes['TeamDto']>, ParentType, ContextType>;
  tournamentCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueEntryDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueEntryDTO'] = ResolversParentTypes['LeagueEntryDTO']> = {
  freshBlood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hotStreak?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  inactive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  leagueId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  leaguePoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  miniSeries?: Resolver<ResolversTypes['MiniSeriesDTO'], ParentType, ContextType>;
  queueType?: Resolver<ResolversTypes['QueueType'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Rank'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  veteran?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MasteryDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['MasteryData'] = ResolversParentTypes['MasteryData']> = {
  championID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  points?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchData'] = ResolversParentTypes['MatchData']> = {
  participants?: Resolver<Array<Array<ResolversTypes['PlayerAnalisys']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchDto'] = ResolversParentTypes['MatchDto']> = {
  info?: Resolver<Maybe<ResolversTypes['InfoDto']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['MetadataDto']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchupDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchupData'] = ResolversParentTypes['MatchupData']> = {
  WR?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  againstChampionID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  played?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  withChampionID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetadataDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetadataDto'] = ResolversParentTypes['MetadataDto']> = {
  dataVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  matchId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  participants?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MiniSeriesDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['MiniSeriesDTO'] = ResolversParentTypes['MiniSeriesDTO']> = {
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  progress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ObjectiveDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ObjectiveDto'] = ResolversParentTypes['ObjectiveDto']> = {
  first?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ObjectivesDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ObjectivesDto'] = ResolversParentTypes['ObjectivesDto']> = {
  baron?: Resolver<Maybe<ResolversTypes['ObjectiveDto']>, ParentType, ContextType>;
  champion?: Resolver<Maybe<ResolversTypes['ObjectiveDto']>, ParentType, ContextType>;
  dragon?: Resolver<Maybe<ResolversTypes['ObjectiveDto']>, ParentType, ContextType>;
  inhibitor?: Resolver<Maybe<ResolversTypes['ObjectiveDto']>, ParentType, ContextType>;
  riftHerald?: Resolver<Maybe<ResolversTypes['ObjectiveDto']>, ParentType, ContextType>;
  tower?: Resolver<Maybe<ResolversTypes['ObjectiveDto']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ObserverResolvers<ContextType = any, ParentType extends ResolversParentTypes['Observer'] = ResolversParentTypes['Observer']> = {
  encryptionKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParticipantDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParticipantDto'] = ResolversParentTypes['ParticipantDto']> = {
  assists?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  baronKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  bountyLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  champExperience?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  champLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  championId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  championName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  championTransform?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  consumablesPurchased?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  damageDealtToBuildings?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  damageDealtToObjectives?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  damageDealtToTurrets?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  damageSelfMitigated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  deaths?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  detectorWardsPlaced?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  doubleKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dragonKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstBloodAssist?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstBloodKill?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstTowerAssist?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstTowerKill?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  gameEndedInEarlySurrender?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  gameEndedInSurrender?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  goldEarned?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  goldSpent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  individualPosition?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inhibitorKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  inhibitorTakedowns?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  inhibitorsLost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item0?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item1?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item2?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item3?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item4?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item5?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item6?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemsPurchased?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  killingSprees?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  kills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lane?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  largestCriticalStrike?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  largestKillingSpree?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  largestMultiKill?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  longestTimeSpentLiving?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  magicDamageDealt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  magicDamageDealtToChampions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  magicDamageTaken?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  neutralMinionsKilled?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nexusKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nexusLost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nexusTakedowns?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  objectivesStolen?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  objectivesStolenAssists?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  participantId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pentaKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perks?: Resolver<Maybe<ResolversTypes['PerksDto']>, ParentType, ContextType>;
  physicalDamageDealt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  physicalDamageDealtToChampions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  physicalDamageTaken?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  profileIcon?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  puuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quadraKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  riotIdName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  riotIdTagline?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sightWardsBoughtInGame?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  spell1Casts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  spell2Casts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  spell3Casts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  spell4Casts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  summoner1Casts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  summoner1Id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  summoner2Casts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  summoner2Id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teamEarlySurrendered?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamPosition?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timeCCingOthers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timePlayed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalDamageDealt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalDamageDealtToChampions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalDamageShieldedOnTeammates?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalDamageTaken?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalHeal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalHealsOnTeammates?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalMinionsKilled?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalTimeCCDealt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalTimeSpentDead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalUnitsHealed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tripleKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  trueDamageDealt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  trueDamageDealtToChampions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  trueDamageTaken?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  turretKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  turretTakedowns?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  turretsLost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unrealKills?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  visionScore?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  visionWardsBoughtInGame?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wardsKilled?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wardsPlaced?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  win?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PerkStatsDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PerkStatsDto'] = ResolversParentTypes['PerkStatsDto']> = {
  defense?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  flex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  offense?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PerkStyleDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PerkStyleDto'] = ResolversParentTypes['PerkStyleDto']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  selections?: Resolver<Array<ResolversTypes['PerkStyleSelectionDto']>, ParentType, ContextType>;
  style?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PerkStyleSelectionDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PerkStyleSelectionDto'] = ResolversParentTypes['PerkStyleSelectionDto']> = {
  perk?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  var1?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  var2?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  var3?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PerksResolvers<ContextType = any, ParentType extends ResolversParentTypes['Perks'] = ResolversParentTypes['Perks']> = {
  perkIds?: Resolver<Array<ResolversTypes['Float']>, ParentType, ContextType>;
  perkStyle?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  perkSubStyle?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PerksDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PerksDto'] = ResolversParentTypes['PerksDto']> = {
  statPerks?: Resolver<Maybe<ResolversTypes['PerkStatsDto']>, ParentType, ContextType>;
  styles?: Resolver<Array<ResolversTypes['PerkStyleDto']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerAnalisysResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerAnalisys'] = ResolversParentTypes['PlayerAnalisys']> = {
  ID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  WR?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  banChart?: Resolver<Array<ResolversTypes['BanRate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  history?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  masteriesChart?: Resolver<Array<ResolversTypes['MasteryData']>, ParentType, ContextType>;
  matchupChart?: Resolver<Array<ResolversTypes['MatchupData']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  playedWith?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  totalGames?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  dummy?: Resolver<ResolversTypes['String'], ParentType, ContextType, Partial<QueryDummyArgs>>;
  getAccountByPUUID?: Resolver<Maybe<ResolversTypes['AccountDto']>, ParentType, ContextType, RequireFields<QueryGetAccountByPuuidArgs, 'puuid'>>;
  getAccountByRiotID?: Resolver<Maybe<ResolversTypes['AccountDto']>, ParentType, ContextType, RequireFields<QueryGetAccountByRiotIdArgs, 'riotID'>>;
  getActiveGameBySummonerID?: Resolver<Maybe<ResolversTypes['CurrentGameInfo']>, ParentType, ContextType, RequireFields<QueryGetActiveGameBySummonerIdArgs, 'summonerID'>>;
  getActiveGameBySummonerName?: Resolver<Maybe<ResolversTypes['CurrentGameInfo']>, ParentType, ContextType, RequireFields<QueryGetActiveGameBySummonerNameArgs, 'name'>>;
  getActiveShard?: Resolver<Maybe<ResolversTypes['ActiveShardDto']>, ParentType, ContextType, RequireFields<QueryGetActiveShardArgs, 'game' | 'puuid'>>;
  getAllMasteriesBySummonerID?: Resolver<Array<ResolversTypes['ChampionMasteryDto']>, ParentType, ContextType, RequireFields<QueryGetAllMasteriesBySummonerIdArgs, 'summonerID'>>;
  getChampionMasteryBySummonerID?: Resolver<Maybe<ResolversTypes['ChampionMasteryDto']>, ParentType, ContextType, RequireFields<QueryGetChampionMasteryBySummonerIdArgs, 'championID' | 'summonerID'>>;
  getCurrentMatchBySummonerID?: Resolver<Maybe<ResolversTypes['MatchData']>, ParentType, ContextType, RequireFields<QueryGetCurrentMatchBySummonerIdArgs, 'ID'>>;
  getLeagueEntryBySummonerID?: Resolver<Array<ResolversTypes['LeagueEntryDTO']>, ParentType, ContextType, RequireFields<QueryGetLeagueEntryBySummonerIdArgs, 'ID'>>;
  getMatchByID?: Resolver<Maybe<ResolversTypes['MatchDto']>, ParentType, ContextType, RequireFields<QueryGetMatchByIdArgs, 'matchID'>>;
  getMatchIDsByPUUID?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryGetMatchIDsByPuuidArgs, 'puuid'>>;
  getMyAccount?: Resolver<Maybe<ResolversTypes['AccountDto']>, ParentType, ContextType>;
  getPlayerAnalysisByID?: Resolver<Maybe<ResolversTypes['PlayerAnalisys']>, ParentType, ContextType, RequireFields<QueryGetPlayerAnalysisByIdArgs, 'ID'>>;
  getSummonerByAccountID?: Resolver<Maybe<ResolversTypes['SummonerDTO']>, ParentType, ContextType, RequireFields<QueryGetSummonerByAccountIdArgs, 'encryptedAccountId'>>;
  getSummonerByID?: Resolver<Maybe<ResolversTypes['SummonerDTO']>, ParentType, ContextType, RequireFields<QueryGetSummonerByIdArgs, 'ID'>>;
  getSummonerByName?: Resolver<Maybe<ResolversTypes['SummonerDTO']>, ParentType, ContextType, RequireFields<QueryGetSummonerByNameArgs, 'name'>>;
  getTotalMasteryPointsBySummonerID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type SummonerDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['SummonerDTO'] = ResolversParentTypes['SummonerDTO']> = {
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileIconId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  puuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  revisionDate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  summonerLevel?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamDto'] = ResolversParentTypes['TeamDto']> = {
  bans?: Resolver<Array<ResolversTypes['BanDto']>, ParentType, ContextType>;
  objectives?: Resolver<Maybe<ResolversTypes['ObjectivesDto']>, ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  win?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AccountDto?: AccountDtoResolvers<ContextType>;
  ActiveShardDto?: ActiveShardDtoResolvers<ContextType>;
  BanDto?: BanDtoResolvers<ContextType>;
  BanRate?: BanRateResolvers<ContextType>;
  BannedChampion?: BannedChampionResolvers<ContextType>;
  ChampionMasteryDto?: ChampionMasteryDtoResolvers<ContextType>;
  CurrentGameInfo?: CurrentGameInfoResolvers<ContextType>;
  CurrentGameParticipant?: CurrentGameParticipantResolvers<ContextType>;
  GameCustomizationObject?: GameCustomizationObjectResolvers<ContextType>;
  InfoDto?: InfoDtoResolvers<ContextType>;
  LeagueEntryDTO?: LeagueEntryDtoResolvers<ContextType>;
  MasteryData?: MasteryDataResolvers<ContextType>;
  MatchData?: MatchDataResolvers<ContextType>;
  MatchDto?: MatchDtoResolvers<ContextType>;
  MatchupData?: MatchupDataResolvers<ContextType>;
  MetadataDto?: MetadataDtoResolvers<ContextType>;
  MiniSeriesDTO?: MiniSeriesDtoResolvers<ContextType>;
  ObjectiveDto?: ObjectiveDtoResolvers<ContextType>;
  ObjectivesDto?: ObjectivesDtoResolvers<ContextType>;
  Observer?: ObserverResolvers<ContextType>;
  ParticipantDto?: ParticipantDtoResolvers<ContextType>;
  PerkStatsDto?: PerkStatsDtoResolvers<ContextType>;
  PerkStyleDto?: PerkStyleDtoResolvers<ContextType>;
  PerkStyleSelectionDto?: PerkStyleSelectionDtoResolvers<ContextType>;
  Perks?: PerksResolvers<ContextType>;
  PerksDto?: PerksDtoResolvers<ContextType>;
  PlayerAnalisys?: PlayerAnalisysResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SummonerDTO?: SummonerDtoResolvers<ContextType>;
  TeamDto?: TeamDtoResolvers<ContextType>;
};

