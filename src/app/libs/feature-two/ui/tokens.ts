import { FeatureTwoPort } from '../use-cases';
import { FeatureTwoOutputState } from './output-state/feature-two-output.state';

export const UI_PROVIDERS = [
  { provide: FeatureTwoPort, useExisting: FeatureTwoOutputState },
];
