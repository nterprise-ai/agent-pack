import { describe, it, expect } from 'bun:test';
import { classifyFallback } from './fallback-heuristic';

describe('classifyFallback', () => {
  // Complexity tests
  describe('complexity', () => {
    it('returns high for data lake keyword', () => {
      const result = classifyFallback('We need a data lake solution');
      expect(result.complexity).toBe('high');
    });

    it('returns high for machine learning keyword', () => {
      const result = classifyFallback('Build a machine learning pipeline');
      expect(result.complexity).toBe('high');
    });

    it('returns high for distributed systems keyword', () => {
      const result = classifyFallback('Distributed microservices architecture');
      expect(result.complexity).toBe('high');
    });

    it('returns high for realtime keyword (with hyphen)', () => {
      const result = classifyFallback('Real-time event processing required');
      expect(result.complexity).toBe('high');
    });

    it('returns high for regulated keyword', () => {
      const result = classifyFallback('The system is regulated under APRA');
      expect(result.complexity).toBe('high');
    });

    it('returns high for compliance keyword', () => {
      const result = classifyFallback('Full compliance with health records legislation');
      expect(result.complexity).toBe('high');
    });

    it('returns medium for integration keyword', () => {
      const result = classifyFallback('Simple integration between two SaaS tools');
      expect(result.complexity).toBe('medium');
    });

    it('returns medium for api keyword', () => {
      const result = classifyFallback('REST API connection to Salesforce');
      expect(result.complexity).toBe('medium');
    });

    it('returns medium for workflow keyword', () => {
      const result = classifyFallback('Automate their approval workflow');
      expect(result.complexity).toBe('medium');
    });

    it('returns low for no complexity signals', () => {
      const result = classifyFallback('Connect Xero to HubSpot for invoice notifications');
      expect(result.complexity).toBe('low');
    });
  });

  // Operational fit tests
  describe('operationalFit', () => {
    it('returns weak for bespoke keyword', () => {
      const result = classifyFallback('Bespoke research into AI possibilities');
      expect(result.operationalFit).toBe('weak');
    });

    it('returns weak for research keyword', () => {
      const result = classifyFallback('Research and exploration of new markets');
      expect(result.operationalFit).toBe('weak');
    });

    it('returns weak for staff augment keyword', () => {
      const result = classifyFallback('Need staff augmentation for 6 months');
      expect(result.operationalFit).toBe('weak');
    });

    it('returns strong for approved budget keyword', () => {
      const result = classifyFallback('Approved budget of $120k, need to deliver by June');
      expect(result.operationalFit).toBe('strong');
    });

    it('returns strong for defined scope keyword', () => {
      const result = classifyFallback('Defined scope, clear deliverables, ready to go');
      expect(result.operationalFit).toBe('strong');
    });

    it('returns moderate when no fit signals present', () => {
      const result = classifyFallback('We have a project and want some help');
      expect(result.operationalFit).toBe('moderate');
    });
  });

  // Rationale
  describe('rationale', () => {
    it('always returns keyword-based fallback rationale', () => {
      const result = classifyFallback('Any transcript at all');
      expect(result.rationale).toBe('keyword-based fallback');
    });
  });

  // Case insensitivity
  describe('case insensitivity', () => {
    it('handles uppercase keywords', () => {
      const result = classifyFallback('MACHINE LEARNING IS REQUIRED');
      expect(result.complexity).toBe('high');
    });

    it('handles mixed case keywords', () => {
      const result = classifyFallback('Machine Learning pipeline needed');
      expect(result.complexity).toBe('high');
    });
  });

  // High complexity takes precedence over medium
  describe('precedence', () => {
    it('returns high when both high and medium signals are present', () => {
      const result = classifyFallback('data lake integration with API');
      expect(result.complexity).toBe('high');
    });

    it('returns weak when both weak and strong signals present (weak takes precedence)', () => {
      // weak pattern wins because FIT_WEAK_PATTERNS is checked first
      const result = classifyFallback('bespoke research with approved budget');
      expect(result.operationalFit).toBe('weak');
    });
  });
});
