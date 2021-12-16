import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureTwoStateModel } from '../../../domain';

@Injectable()
export abstract class FeatureTwoDataPort {
  abstract toggleState(): void;
  abstract featureTwoState$: Observable<FeatureTwoStateModel>;
}
