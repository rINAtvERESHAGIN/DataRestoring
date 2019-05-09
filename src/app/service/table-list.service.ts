import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TableLIstModal} from '../modal/TableLIstModal';
import {MyModel} from '../modal/MyModel';
import {map} from 'rxjs/internal/operators';
import {plainToClass} from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class TableListService {

  constructor(private http: HttpClient) {
  }

  getDynamicTableData(tableListModal: TableLIstModal) {
    // return this.http.post('');
  }

  getDynamicTableName() {
    return this.http.get<MyModel[]>('http://127.0.0.1:8000/web/getTableName/')
      .pipe(
        map(response => plainToClass(MyModel, response as Object[]))
      );
  }

}
