// src/app/characters/characters.component.ts

import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../rickandmorty.service';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  page = 1;

  constructor(private rickandmortyService: RickandmortyService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.rickandmortyService.getCharacters(this.page).subscribe(response => {
      this.characters = response.results;
    });
  }

  loadMore(): void {
    this.page++;
    this.rickandmortyService.getCharacters(this.page).subscribe(response => {
      this.characters.push(...response.results);
    });
  }
}
