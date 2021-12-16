import { Injectable } from '@angular/core';
import { FeatureTwoPort } from '../feature-two/ui';

@Injectable({ providedIn: 'root' })
export class FeatureTwoStoreFacade {
  constructor(private readonly featureTwoStore: FeatureTwoPort) {}

  toggleState(): void {
    console.log('facade');
    this.featureTwoStore.setState(true);
  }
}
