import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messagesService: MessagesService) {}

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messagesService.add('HeroService: Fetched heroes');
    return of(HEROES);
  }

  getHero(id): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messagesService.add(`Hero with id ${id} was fetched`);
    return of(HEROES.find((hero) => hero.id === id));
  }
}
