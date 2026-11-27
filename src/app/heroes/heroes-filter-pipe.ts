import { Pipe, PipeTransform } from '@angular/core';
import { IHeroes } from './heroes';

@Pipe({
  name: 'heroesFilter',
  standalone: false,
})
export class HeroesFilterPipe implements PipeTransform {
  transform(value: IHeroes[], args: string): IHeroes[] {
    const filter: string = args ? args.toLocaleLowerCase() : '';

    return filter
      ? value.filter((hero: IHeroes) => hero.nombre.toLocaleLowerCase().includes(filter))
      : value;
  }
}