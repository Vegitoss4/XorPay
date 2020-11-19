import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from  '@angular/forms';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.less']
})
export class SchedulerComponent implements OnInit {
  closeResult: string;
  paramForm: FormGroup;
  constructor(private modalService: NgbModal,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  open(content) {
    this.modalService.open(content, {centered: true,ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }
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

}
