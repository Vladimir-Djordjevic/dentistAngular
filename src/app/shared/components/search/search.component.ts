import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() inputValue = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
  onBlur(value: string) {
    this.inputValue.emit(value);
    console.log(value);
  }
}
