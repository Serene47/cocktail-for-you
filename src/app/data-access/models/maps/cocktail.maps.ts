import { BadgeVariant } from "../../../shared/components/badge/models/badge.types";
import { COCKTAIL_ALCOHOL_STATUS } from "../constants/cocktail.constants";

export const ALCOHOLIC_STATUS_BADGE_MAPPING: Record<string, BadgeVariant> = {
  [COCKTAIL_ALCOHOL_STATUS.ALCOHOLIC]: "info",
  [COCKTAIL_ALCOHOL_STATUS.NON_ALCOHOLIC]: "success"
};