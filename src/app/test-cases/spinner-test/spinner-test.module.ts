import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerTestComponent } from './spinner-test.component';
import { SpinnerModule } from 'projects/ngb-components-lib/src/public-api';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [SpinnerTestComponent],
  imports: [
    CommonModule,
    SpinnerModule,
    RouterModule.forChild([{
      path: '',
      component: SpinnerTestComponent
    }])
  ]
})
export class SpinnerTestModule { }
