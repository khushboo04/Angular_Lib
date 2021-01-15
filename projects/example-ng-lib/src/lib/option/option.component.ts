import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'enl-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  myForm: FormGroup;
  allComplete: boolean = false;

  @Input() data;
  @Output() formData = new EventEmitter();
  @Output() filteredValues = new EventEmitter();
  ngOnInit() {
    console.log(this.data);
    this.myForm = new FormGroup({
      name: new FormControl('Benedict'),
      email: new FormControl(''),
      message: new FormControl('')
    });
  }

  onSubmit(form: FormGroup) {
    this.formData.emit(form.value);
  }

  updateAllComplete() {
    this.data.forEach((data) => {
      this.allComplete = data.filters.every(t => t.value);
    });
    this.filteredValues.emit(this.data);
  }

}
