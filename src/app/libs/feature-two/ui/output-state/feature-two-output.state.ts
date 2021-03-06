import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FeatureTwoPort } from '../../use-cases';

@Injectable({ providedIn: 'root' })
export class FeatureTwoOutputState implements FeatureTwoPort {
  private readonly state$ = new Subject<boolean>();

  setState(state: boolean): void {
    this.state$.next(state);
  }

  getState(): Observable<boolean> {
    return this.state$;
  }
}
