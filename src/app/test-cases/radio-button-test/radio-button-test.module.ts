import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonTestComponent } from './radio-button-test.component';
import { RadioButtonModule } from 'projects/ngb-components-lib/src/lib/components/radio-button/radio-button.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RadioButtonTestComponent],
  imports: [
    CommonModule,
    RadioButtonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: RadioButtonTestComponent
    }
    ])
  ]
})
export class RadioButtonTestModule { }
