import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedUiModule } from '@class-validator-monorepo/shared-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,SharedUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
