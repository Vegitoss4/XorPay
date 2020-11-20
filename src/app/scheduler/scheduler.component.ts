import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.less']
})
export class SchedulerComponent implements OnInit {
  paramForm: FormGroup;
  display='none';
  constructor(private formBuilder: FormBuilder) { }

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
  }
// --------------------------------------------------------Reactive-Form-------------------------------------------------------------------

// -----------------------------Modal--------------------------------------------
openModalDialog(){
  this.display='block'; //Set block css
}

closeModalDialog(){
this.display='none'; //set none css after close dialog
}
// -----------------------------Modal--------------------------------------------


}
