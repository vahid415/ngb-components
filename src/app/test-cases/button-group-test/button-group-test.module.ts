import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonGroupTestComponent } from './button-group-test.component';
import { ButtonModule, ButtonGroupModule } from 'projects/ngb-components-lib/src/public-api';

@NgModule({
  declarations: [
    ButtonGroupTestComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ButtonGroupModule,
    RouterModule.forChild([{
      path: '',
      component: ButtonGroupTestComponent
    }])
  ]
})
export class ButtonGroupTestModule { }
