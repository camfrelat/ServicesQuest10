import { Injectable } from '@angular/core';
import { Cocktail } from './shared/models/cocktail.model';
import { allCocktails } from './shared/mocks/cocktails.mock';
@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor() {}

  public getCocktails(): Cocktail[] {
    return allCocktails;
  }
}
