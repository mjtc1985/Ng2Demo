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

    this.header = 'cervezas';
  }

  reverseList() {
    this.beers.reverse();
    this._dataService.setBeers(this.beers);
  }

  addBeer(id: string, description: string) {
    this.dataService.addBeer({
      id: id,
      description: description
    });
  }

  loadBeers() {
    this.beers = this.dataService.getBeers();
  }

}
