import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AllAction} from '../../modal/AllAction';
import {map} from 'rxjs/operators';
import {plainToClass} from 'class-transformer';
import {Cards} from '../../modal/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) {
  }

  getCardsDataService() {
    return this.http.get<Cards[]>('http://127.0.0.1:8000/web/getCardsData/')
      .pipe(
        map(response => plainToClass(Cards, response as Object))
      );
  }
}
