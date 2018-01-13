import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Beer } from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() beerList: Array<Beer>;
  @Output() reverseList: EventEmitter<any> = new EventEmitter<any>();

  emitEvent() {
    this.reverseList.emit(null);
  }
}
