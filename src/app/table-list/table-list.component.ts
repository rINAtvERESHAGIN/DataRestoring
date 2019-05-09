import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Dictionary} from 'async';
import {MyModel} from '../modal/MyModel';
import {TableLIstModal} from '../modal/TableLIstModal';
import {TableListService} from '../service/table-list.service';
import {finalize, tap} from 'rxjs/operators';


export interface TableName extends Dictionary<AbstractControl> {
  tableNameFCN: AbstractControl;
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers: [TableListService]
})
export class TableListComponent implements OnInit {

  tableName: MyModel[] = []; // будет хранить имена таблиц которые можно показать
  dynamicTableData: TableLIstModal[] = []; // будет хранить данные которые приходят от динамической таблицы
  selectedObjectToRestore: TableLIstModal[] = [];

  // Choose forms
  cFG: FormGroup;
  tableNameFC: FormControl = new FormControl();

  constructor(private builder: FormBuilder,
              private httpServiceTableList: TableListService) {
    this.cFG = this.builder.group({
      tableNameFCN: this.tableNameFC,
    } as TableName);
  }

  ngOnInit() {
    this.getDynamicTableName();
  }

  getDynamicTableName() {
    this.httpServiceTableList.getDynamicTableName()
      .pipe(
        tap(() => {

        }),
        finalize(() => {

        })
      ).subscribe(response => {
        this.tableName = response;
      });
  }

//    button
  onRestoreButton() {
  }

}
