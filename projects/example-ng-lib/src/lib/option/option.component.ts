import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'enl-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  allComplete: boolean = false;

  @Input() data;
  @Output() filteredValues = new EventEmitter();
  ngOnInit() {}

  updateAllComplete() {
    this.data.forEach((data) => {
      this.allComplete = data.filters.every(t => t.value);
    });
    this.filteredValues.emit(this.data);
  }

}
