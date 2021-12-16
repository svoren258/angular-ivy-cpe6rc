import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureTwoStateModel } from '../../../domain';

@Injectable()
export abstract class FeatureTwoUiPort {
  abstract getState(): Observable<FeatureTwoStateModel>;
  abstract setState(state: boolean): void;
}
