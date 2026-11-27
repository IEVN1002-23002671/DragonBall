import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IHeroes } from './heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private readonly url = 'https://dragonball-api.com/api/characters?limit=50';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<IHeroes[]> {
    return this.http.get<{ items: any[] }>(this.url).pipe(
      map((respuesta) =>
        respuesta.items.map((personaje) => ({
          imagen: personaje.image,
          nombre: personaje.name,
          descripcion: personaje.description,
          race: personaje.race,
          Ki: personaje.ki,
        }))
      )
    );
  }
}