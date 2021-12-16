import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  APPLICATION_PROVIDERS,
  INFRASTRUCTURE_PROVIDERS,
} from './infrastructure';
import { UiModule, UI_PROVIDERS } from './ui';

@NgModule({
  exports: [UiModule],
})
export class FeatureTwoModule {
  static forRoot(): ModuleWithProviders<FeatureTwoModule> {
    return {
      ngModule: FeatureTwoModule,
      providers: [
        ...INFRASTRUCTURE_PROVIDERS,
        ...APPLICATION_PROVIDERS,
        ...UI_PROVIDERS,
      ],
    };
  }
}
