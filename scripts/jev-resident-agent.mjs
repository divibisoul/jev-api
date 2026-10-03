export const JEV_RESIDENT_AGENT = {
  id: 'JEV.resident',
  name: 'Agent-Decision Guardrail Steward',
  component: 'JEV',
  version: '1.0.0',
  role: 'typed-decision-triage-guardrails',
  lifecycle: 'BOUND',
  executionMode: 'external-decision-service-via-N07',
  publishedCapabilities: [
    'jev.systemone@1.0.0',
    'decision.model.routing',
    'decision.context.memory',
    'decision.workflow.guardrail',
    'external.capability.fabric.describe@1.0.0',
  ],
  upstreamProviderCount: 25,
  externalFabric: 'scripts/jev-capability-fabric.mjs',
  authority: 'JEV owns the typed decision/guardrail contract; N07 owns transport, orchestration and authentication.',
} as const;
