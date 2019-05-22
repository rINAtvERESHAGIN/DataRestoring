import { Injectable } from '@angular/core';
import {MyModel} from '../../modal/MyModel';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {plainToClass} from 'class-transformer';
import {AllAction} from '../../modal/AllAction';

@Injectable({
  providedIn: 'root'
})
export class AllActionServiceService {

  constructor(private http: HttpClient) {
  }

  getAllActionService() {
    return this.http.get<AllAction[]>('http://127.0.0.1:8000/web/getAllAction/')
      .pipe(
        map(response => plainToClass(AllAction, response as Object[]))
      );
  }
}
