import { Component } from '@angular/core';
import { Beer } from './shared/list/list.model';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private dataService: DataService;

  public header: string;
  public beers: Array<Beer>;

  constructor(private _dataService: DataService) {
    this.dataService = _dataService;

    this.header = 'Cervezas';
    this.beers = this.dataService.getBeers();
  };

  reverseList() {
    this.beers.reverse();
    this._dataService.setBeers(this.beers);
  }

}
