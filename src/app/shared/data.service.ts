import {Injectable} from '@angular/core';
import {Beer} from './list/list.model';

@Injectable()
export class DataService {

  private beers: Array<Beer> = [
    {
      id: 'Alhambra1985',
      description: 'Ámbar dorada.'
    },
    {
      id: 'AlhambraEspecial',
      description: 'Típica Lager.'
    },
    {
      id: 'Ambar1900:',
      description: 'Pale Ale'
    },
    {
      id: 'Guinness',
      description: 'Cerveza negra'
    },
  ];

  contructor() {

  }

  getBeers(): Array<Beer> {
    return this.beers;
  }

  setBeers(beers: Array<Beer>) {
    this.beers = beers;
  }

  addBeer(beer: Beer) {
    this.beers.push(beer);
  }

}
