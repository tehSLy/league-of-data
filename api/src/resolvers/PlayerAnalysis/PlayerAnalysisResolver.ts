import { createResolver, QueryResolvers } from "../createResolver";
import { getPlayerAnalysis } from "./getPlayerAnalysis";

export const PlayerAnalysisResolver = createResolver<
  QueryResolvers["getPlayerAnalysisByID"]
>(async ({ ID }) => {
  return getPlayerAnalysis({ ID });
});
