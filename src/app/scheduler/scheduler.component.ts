import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';
import { SchedulerService } from './scheduler.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.less']
})
export class SchedulerComponent implements OnInit {
  paramForm: FormGroup;
  display='none';
  constructor(private formBuilder: FormBuilder,
    private schedulerService:SchedulerService) { 
    this.createContactForm();
  }

  ngOnInit(): void {
  }
// --------------------------------------------------------Reactive-Form-------------------------------------------------------------------
  createContactForm(){
    this.paramForm = this.formBuilder.group({
      param1: [''],  
      param2: [''],
      param3: [''],
      param4: ['']
    });
  }

  onSubmit() {
      console.log('Your form data : ', this.paramForm.value );
      this.schedulerService.addParams(this.paramForm.value).subscribe(data => {
        console.log(data);
      })  
  }
// --------------------------------------------------------Reactive-Form-------------------------------------------------------------------

// -----------------------------Modal--------------------------------------------
openModalDialog(){
  this.display='block'; //Set block css
}

closeModalDialog(){
this.display='none'; //set none css after close dialog
}

clearModalForm() {
  this.paramForm.setValue({param1: '', param2: '',param3: '', param4: ''});
  this.paramForm.reset();
}

// -----------------------------Modal--------------------------------------------


}
