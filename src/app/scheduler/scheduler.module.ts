import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerRoutingModule } from './scheduler-routing.module';
import { SchedulerComponent } from './scheduler.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';




@NgModule({
  declarations: [SchedulerComponent],
  imports: [
    CommonModule,
    SchedulerRoutingModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  entryComponents: [
    
  ]
})
export class SchedulerModule { }
