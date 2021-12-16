import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { FeatureOneUiPort, FeatureTwoUiPort } from '../../use-cases';

@Component({
  selector: 'my-feature-two',
  templateUrl: './feature-two.component.html',
})
export class FeatureTwoComponent {
  readonly state$ = this.featureTwoUseCase.getState();
  readonly currentState$ = this.state$.pipe(
    map(({ isFeatureTwoTrue }) => isFeatureTwoTrue)
  );

  constructor(
    private readonly featureTwoUseCase: FeatureTwoUiPort,
    private readonly featureOneUseCase: FeatureOneUiPort
  ) {}

  toggleState(): void {
    this.featureTwoUseCase.setState(true);
  }

  toggleOuterState(): void {
    this.featureOneUseCase.setState(true);
  }
}
