/**
 * ABN Lookup thin wrapper.
 *
 * TODO: Runtime integration point — in production, this delegates to
 * `@repo/research`'s ABN client (`import { abnClient } from '@repo/research'`),
 * which handles GUID authentication, request signing, response caching, and
 * rate limiting against abr.business.gov.au.
 *
 * In agent-pack (standalone template), this stub returns the expected shape
 * so downstream code can be authored against the interface without the runtime
 * dependency present.
 *
 * When integrating into an nterprise platform workspace:
 * 1. Replace the stub implementation with the @repo/research import
 * 2. Ensure ABR_GUID is set in the environment (sourced from platform secrets)
 * 3. Remove this TODO block
 */

export interface AbnLookupResult {
  abn: string;
  acn?: string;
  entityName: string;
  entityType: string;
  status: 'active' | 'cancelled' | 'unknown';
  gstRegistered: boolean;
  registeredAddress?: {
    postcode: string;
    state: string;
  };
  anzsicCode?: string;
  anzsicDescription?: string;
  lastUpdated: string;
}

/**
 * Look up an organisation by ABN.
 *
 * @param abn - 11-digit ABN (spaces optional)
 * @returns AbnLookupResult or null if not found
 */
export async function lookupAbn(abn: string): Promise<AbnLookupResult | null> {
  // TODO: Replace with @repo/research ABN client
  // import { abnClient } from '@repo/research';
  // return abnClient.lookupAbn(abn);
  throw new Error(
    'ABN Lookup stub: not implemented in standalone agent-pack. ' +
    'Integrate @repo/research in a platform workspace to activate.'
  );
}

/**
 * Look up an organisation by ACN.
 *
 * @param acn - 9-digit ACN (spaces optional)
 * @returns AbnLookupResult or null if not found
 */
export async function lookupAcn(acn: string): Promise<AbnLookupResult | null> {
  // TODO: Replace with @repo/research ABN client
  // import { abnClient } from '@repo/research';
  // return abnClient.lookupAcn(acn);
  throw new Error(
    'ACN Lookup stub: not implemented in standalone agent-pack. ' +
    'Integrate @repo/research in a platform workspace to activate.'
  );
}
