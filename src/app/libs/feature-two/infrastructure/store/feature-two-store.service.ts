import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FeatureTwoStateModel } from '../../domain';
import { FeatureTwoDataPort } from '../../use-cases';

@Injectable({ providedIn: 'root' })
export class FeatureTwoStoreService implements FeatureTwoDataPort {
  readonly initialState: FeatureTwoStateModel = {
    isFeatureTwoTrue: false,
  };

  readonly featureTwoState$ = new BehaviorSubject<FeatureTwoStateModel>(
    this.initialState
  );

  toggleState(): void {
    this.featureTwoState$.next({
      ...this.initialState,
      isFeatureTwoTrue: !this.featureTwoState$.value.isFeatureTwoTrue,
    });
  }
}
