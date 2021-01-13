import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTestComponent } from './card-test.component';
import { RouterModule } from '@angular/router';
import { CardModule, ButtonModule } from 'projects/ngb-components-lib/src/public-api';



@NgModule({
  declarations: [CardTestComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RouterModule.forChild([{
      path: '',
      component: CardTestComponent
    }])
  ]
})
export class CardTestModule { }
