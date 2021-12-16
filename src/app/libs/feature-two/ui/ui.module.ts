import { NgModule } from '@angular/core';
import { FeatureTwoComponent } from './components/feature-two.component';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [FeatureTwoComponent],
  imports: [CommonModule],
  declarations: [FeatureTwoComponent],
})
export class UiModule {}
