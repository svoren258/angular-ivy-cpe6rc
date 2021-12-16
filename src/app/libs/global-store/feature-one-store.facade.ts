import { Injectable } from '@angular/core';
import { FeatureOnePort } from '../feature-one/ui';

@Injectable({ providedIn: 'root' })
export class FeatureOneStoreFacade {
  constructor(private readonly featureOnePort: FeatureOnePort) {}

  toggleState(): void {
    this.featureOnePort.setState(true);
  }
}
