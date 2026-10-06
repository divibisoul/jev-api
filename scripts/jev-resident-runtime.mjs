import { JEV_RESIDENT_AGENT } from './jev-resident-agent.mjs';
import { describeJevCapabilityFabric } from './jev-capability-fabric.mjs';

export function describeJevResidentRuntime() {
  return { residentAgent: JEV_RESIDENT_AGENT, fabric: describeJevCapabilityFabric(), executionBoundary: 'N07:jev.systemone@1.0.0' };
}