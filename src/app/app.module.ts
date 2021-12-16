import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FeatureOneModule } from './libs/feature-one/feature-one.module';
import { FeatureTwoModule } from './libs/feature-two/feature-two.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FeatureOneModule.forRoot(),
    FeatureTwoModule.forRoot(),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
