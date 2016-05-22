import { Component, OnInit, Input } from '@angular/core';
import { MdSpinner } from '@angular2-material/progress-circle';

@Component({
  moduleId: module.id,
  selector: 'tl-spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['spinner.component.css'],
  directives: [MdSpinner],
})
export class SpinnerComponent implements OnInit {
  @Input()
  loading: boolean = false;

  constructor() {}

  ngOnInit() {
  }

}
