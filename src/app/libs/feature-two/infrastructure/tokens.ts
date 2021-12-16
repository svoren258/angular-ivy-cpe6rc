import {
  FeatureOneUiPort,
  FeatureOneUseCase,
  FeatureTwoUiPort,
  FeatureTwoUseCase,
  FeatureOneDataPort,
  FeatureTwoDataPort,
} from '../use-cases';
import { FeatureOneStoreService } from './store/feature-one-store.service';
import { FeatureTwoStoreService } from './store/feature-two-store.service';

export const INFRASTRUCTURE_PROVIDERS = [
  {
    provide: FeatureOneDataPort,
    useExisting: FeatureOneStoreService,
  },
  {
    provide: FeatureTwoDataPort,
    useExisting: FeatureTwoStoreService,
  },
];

export const APPLICATION_PROVIDERS = [
  { provide: FeatureOneUiPort, useExisting: FeatureOneUseCase },
  {
    provide: FeatureTwoUiPort,
    useExisting: FeatureTwoUseCase,
    deps: [FeatureTwoDataPort, FeatureOneDataPort],
  },
];
