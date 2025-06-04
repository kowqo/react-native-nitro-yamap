import { NitroModules } from 'react-native-nitro-modules';
import type { NitroYamap } from './NitroYamap.nitro';

const NitroYamapHybridObject =
  NitroModules.createHybridObject<NitroYamap>('NitroYamap');

export function multiply(a: number, b: number): number {
  return NitroYamapHybridObject.multiply(a, b);
}
