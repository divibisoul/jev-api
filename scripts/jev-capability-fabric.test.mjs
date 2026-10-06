import assert from 'node:assert/strict';
import {describeJevCapabilityFabric,providersByFunction,resolveJevExternalProvider} from './jev-capability-fabric.mjs';
assert.equal(describeJevCapabilityFabric().providerCount,25);
assert.equal(resolveJevExternalProvider('pydantic-ai').revision,'6bc07cf18b0641ea92343d8c589cfb922108b802');
assert.equal(resolveJevExternalProvider('vllm').canonicalOwner,'N07');
assert.ok(providersByFunction('typed-decision.schema').some(p=>p.id==='pydantic-ai'));
assert.ok(providersByFunction('decision.context.memory').some(p=>p.id==='mem0'));
assert.throws(()=>resolveJevExternalProvider('unknown'),/JEV_EXTERNAL_PROVIDER_UNKNOWN/);
console.log('JEV 25-source capability fabric: PASS');
