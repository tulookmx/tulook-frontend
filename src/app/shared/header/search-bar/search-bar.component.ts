import { Component, OnInit } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'tl-search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css'],
  directives: [MdToolbar],
})
export class SearchBarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
