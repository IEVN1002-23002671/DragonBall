import { Component, OnInit } from '@angular/core';
import { IHeroes } from '../heroes';
import { HeroesService } from '../heroes-service';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList implements OnInit {
  imageWidth: number = 40;
  imageMargin: number = 2;
  muestraImage: boolean = true;
  listFilter: string = '';
  heroes: IHeroes[] = [];
  cargando: boolean = true;
  error: string = '';

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe({
      next: (data) => {
        this.heroes = data;
        this.cargando = false;
      },
      error: () => {
        this.error = 'No se pudo cargar la información de los personajes.';
        this.cargando = false;
      },
    });
  }

  showImage(): void {
    this.muestraImage = !this.muestraImage;
  }
}