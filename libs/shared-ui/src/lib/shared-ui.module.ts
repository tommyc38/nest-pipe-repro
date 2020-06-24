import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransComponent } from './trans/trans.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [TransComponent],
  exports: [TransComponent]
})
export class SharedUiModule {}
