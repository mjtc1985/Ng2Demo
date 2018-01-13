import { Component } from '@angular/core';
import { Beer } from './shared/list/list.model';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public header: string;
  public beers: Array<Beer>;

  constructor(private _dataService: DataService) {
    this.header = 'Cervezas';
    this.beers = _dataService.getBeers();
  };
}
