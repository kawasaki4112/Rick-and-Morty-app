import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  characters: any[] = [];
  page: number = 1;
  isLoading: boolean = false;

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.isLoading = true;
    this.rickAndMortyService.getCharacters(this.page).subscribe(data => {
      this.characters = this.characters.concat(data.results);
      this.isLoading = false;
    });
  }

  onScroll() {
    this.page++;
    this.loadCharacters();
  }
}
