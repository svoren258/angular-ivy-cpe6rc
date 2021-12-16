import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureTwoStateModel } from '../domain';
import { FeatureOneDataPort } from './ports/infrastructure/feature-one-data.port';
import { FeatureTwoDataPort } from './ports/infrastructure/feature-two-data.port';
import { FeatureTwoUiPort } from './ports/ui/feature-two-ui.port';

@Injectable({ providedIn: 'root' })
export class FeatureTwoUseCase implements FeatureTwoUiPort {
  constructor(
    private readonly featureOneDataPort: FeatureOneDataPort,
    private readonly featureTwoDataPort: FeatureTwoDataPort
  ) {}

  getState(): Observable<FeatureTwoStateModel> {
    return this.featureTwoDataPort.featureTwoState$;
  }

  setState(state: boolean): void {
    this.featureTwoDataPort.toggleState();
  }
}
