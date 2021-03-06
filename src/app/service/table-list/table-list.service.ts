import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TableLIstModal} from '../../modal/TableLIstModal';
import {MyModel} from '../../modal/MyModel';
import {map} from 'rxjs/internal/operators';
import {plainToClass} from 'class-transformer';
import {RegisteredTable} from '../../modal/registered_table';

@Injectable({
  providedIn: 'root'
})
export class TableListService {

  constructor(private http: HttpClient) {
  }

  getDynamicTableName() {
    return this.http.get<MyModel[]>('http://127.0.0.1:8000/web/getTableName/')
      .pipe(
        map(response => plainToClass(MyModel, response as Object[]))
      );
  }

  sendDynamicNameToGetDataService(myModel: RegisteredTable) {
    return this.http.post('http://127.0.0.1:8000/web/getDynamicTableData/', myModel)
      .pipe(
        map(response => plainToClass(TableLIstModal, response as Object[]))
      );
  }
}
