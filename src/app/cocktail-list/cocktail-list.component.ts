import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/models/cocktail.model';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  public cocktails: Cocktail[];

  constructor(public cocktailService: CocktailService) {
    this.cocktails = new Array();
  }

  getCocktails(): void {
    this.cocktails = this.cocktailService.getCocktails();
  }

  ngOnInit(): void {
    this.getCocktails();
  }
}
