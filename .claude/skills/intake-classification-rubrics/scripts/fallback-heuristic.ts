/**
 * Fallback heuristic for intake classification.
 *
 * Used when AI classification (nt-classify-intake) is unavailable or
 * returns a low-confidence result. Applies deterministic keyword scoring
 * to produce a classification without an LLM call.
 *
 * Integration point: in the full platform, nt-classify-intake calls this
 * as a fallback via @repo/research's classifier client. In agent-pack
 * (standalone), import and call directly.
 */

export type Complexity = 'low' | 'medium' | 'high';
export type OperationalFit = 'strong' | 'moderate' | 'weak';

export interface ClassificationResult {
  complexity: Complexity;
  operationalFit: OperationalFit;
  rationale: string;
}

const COMPLEXITY_HIGH_PATTERNS =
  /data lake|machine learning|distributed|real.?time|regulated|compliance|hl7|fhir|mainframe|migration|multi.year|etl/i;

const COMPLEXITY_MEDIUM_PATTERNS =
  /integration|api|workflow|pipeline|on.?prem|soap|wsdl|transform|mapping|warehouse/i;

const FIT_WEAK_PATTERNS =
  /bespoke|research|exploration|body.?shop|staff augment|managed service|training only|tender|rfq|rfp/i;

const FIT_STRONG_PATTERNS =
  /standard|approved budget|defined scope|go.?live|working software|deliver|implement/i;

/**
 * Classify an intake transcript using keyword-based heuristics.
 *
 * @param transcript - Raw intake transcript or notes string
 * @returns ClassificationResult with complexity, operationalFit, and rationale
 */
export function classifyFallback(transcript: string): ClassificationResult {
  const complexity: Complexity = COMPLEXITY_HIGH_PATTERNS.test(transcript)
    ? 'high'
    : COMPLEXITY_MEDIUM_PATTERNS.test(transcript)
      ? 'medium'
      : 'low';

  const operationalFit: OperationalFit = FIT_WEAK_PATTERNS.test(transcript)
    ? 'weak'
    : FIT_STRONG_PATTERNS.test(transcript)
      ? 'strong'
      : 'moderate';

  return {
    complexity,
    operationalFit,
    rationale: 'keyword-based fallback',
  };
}
