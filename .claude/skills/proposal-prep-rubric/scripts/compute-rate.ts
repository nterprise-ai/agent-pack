/**
 * Daily rate calculator for nterprise engagements.
 *
 * Computes daily, monthly, and minimum engagement rates based on
 * resource tier and billing mode. Used by nt-prepare-pricing to
 * generate accurate pricing tables.
 */

export type Tier = 'standard' | 'dual' | 'senior';
export type BillingMode = 'daily' | 'subscription' | 'milestone';

export interface RateInput {
  tier: Tier;
  mode: BillingMode;
  days?: number;
}

export interface RateOutput {
  dailyRateAud: number;
  monthlyRateAud: number;
  minimumEngagementDays: number;
  totalAud?: number;
}

const DAILY_RATE_AUD: Record<Tier, number> = {
  standard: 1500,
  dual: 2200,
  senior: 3000,
};

const MODE_MODIFIERS: Record<BillingMode, number> = {
  daily: 1.0,
  subscription: 0.9,
  milestone: 1.1,
};

const MIN_DAYS: Record<BillingMode, number> = {
  daily: 3,
  subscription: 20,
  milestone: 5,
};

const WORKING_DAYS_PER_MONTH = 20;

/**
 * Compute the rate for an engagement.
 *
 * @param input.tier - Resource tier: standard | dual | senior
 * @param input.mode - Billing mode: daily | subscription | milestone
 * @param input.days - Optional: number of days to compute total for
 * @returns Rate details including daily, monthly, minimum days, and optional total
 */
export function computeRate(input: RateInput): RateOutput {
  const baseRate = DAILY_RATE_AUD[input.tier];
  const modifier = MODE_MODIFIERS[input.mode];
  const dailyRateAud = baseRate * modifier;
  const monthlyRateAud = dailyRateAud * WORKING_DAYS_PER_MONTH;
  const minimumEngagementDays = MIN_DAYS[input.mode];

  const result: RateOutput = {
    dailyRateAud,
    monthlyRateAud,
    minimumEngagementDays,
  };

  if (input.days !== undefined) {
    result.totalAud = dailyRateAud * input.days;
  }

  return result;
}
