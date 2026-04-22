import { describe, it, expect } from 'bun:test';
import { computeRate } from './compute-rate';

describe('computeRate', () => {
  // Standard tier
  describe('standard tier', () => {
    it('standard / daily: $1500/day, $30000/month, min 3 days', () => {
      const result = computeRate({ tier: 'standard', mode: 'daily' });
      expect(result.dailyRateAud).toBe(1500);
      expect(result.monthlyRateAud).toBe(30000);
      expect(result.minimumEngagementDays).toBe(3);
    });

    it('standard / subscription: $1350/day, $27000/month, min 20 days', () => {
      const result = computeRate({ tier: 'standard', mode: 'subscription' });
      expect(result.dailyRateAud).toBeCloseTo(1350);
      expect(result.monthlyRateAud).toBeCloseTo(27000);
      expect(result.minimumEngagementDays).toBe(20);
    });

    it('standard / milestone: $1650/day, $33000/month, min 5 days', () => {
      const result = computeRate({ tier: 'standard', mode: 'milestone' });
      expect(result.dailyRateAud).toBeCloseTo(1650);
      expect(result.monthlyRateAud).toBeCloseTo(33000);
      expect(result.minimumEngagementDays).toBe(5);
    });
  });

  // Dual tier
  describe('dual tier', () => {
    it('dual / daily: $2200/day, $44000/month, min 3 days', () => {
      const result = computeRate({ tier: 'dual', mode: 'daily' });
      expect(result.dailyRateAud).toBe(2200);
      expect(result.monthlyRateAud).toBe(44000);
      expect(result.minimumEngagementDays).toBe(3);
    });

    it('dual / subscription: $1980/day, $39600/month, min 20 days', () => {
      const result = computeRate({ tier: 'dual', mode: 'subscription' });
      expect(result.dailyRateAud).toBeCloseTo(1980);
      expect(result.monthlyRateAud).toBeCloseTo(39600);
      expect(result.minimumEngagementDays).toBe(20);
    });

    it('dual / milestone: $2420/day, $48400/month, min 5 days', () => {
      const result = computeRate({ tier: 'dual', mode: 'milestone' });
      expect(result.dailyRateAud).toBeCloseTo(2420);
      expect(result.monthlyRateAud).toBeCloseTo(48400);
      expect(result.minimumEngagementDays).toBe(5);
    });
  });

  // Senior tier
  describe('senior tier', () => {
    it('senior / daily: $3000/day, $60000/month, min 3 days', () => {
      const result = computeRate({ tier: 'senior', mode: 'daily' });
      expect(result.dailyRateAud).toBe(3000);
      expect(result.monthlyRateAud).toBe(60000);
      expect(result.minimumEngagementDays).toBe(3);
    });

    it('senior / subscription: $2700/day, $54000/month, min 20 days', () => {
      const result = computeRate({ tier: 'senior', mode: 'subscription' });
      expect(result.dailyRateAud).toBeCloseTo(2700);
      expect(result.monthlyRateAud).toBeCloseTo(54000);
      expect(result.minimumEngagementDays).toBe(20);
    });

    it('senior / milestone: $3300/day, $66000/month, min 5 days', () => {
      const result = computeRate({ tier: 'senior', mode: 'milestone' });
      expect(result.dailyRateAud).toBeCloseTo(3300);
      expect(result.monthlyRateAud).toBeCloseTo(66000);
      expect(result.minimumEngagementDays).toBe(5);
    });
  });

  // Optional days parameter
  describe('days parameter', () => {
    it('computes total when days provided', () => {
      const result = computeRate({ tier: 'standard', mode: 'daily', days: 10 });
      expect(result.totalAud).toBe(15000);
    });

    it('omits total when days not provided', () => {
      const result = computeRate({ tier: 'standard', mode: 'daily' });
      expect(result.totalAud).toBeUndefined();
    });

    it('computes total for subscription with days', () => {
      const result = computeRate({ tier: 'dual', mode: 'subscription', days: 20 });
      // 2200 * 0.9 * 20 = 39600
      expect(result.totalAud).toBeCloseTo(39600);
    });
  });
});
