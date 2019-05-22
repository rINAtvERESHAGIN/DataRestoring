import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Dictionary} from 'async';
import {MyModel} from '../modal/MyModel';
import {TableLIstModal} from '../modal/TableLIstModal';
import {TableListService} from '../service/table-list/table-list.service';
import {finalize, tap} from 'rxjs/operators';
import {Cards} from '../modal/cards';
import {RegisteredTable} from '../modal/registered_table';

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

  tableNameFromSelect: RegisteredTable = new RegisteredTable();


  // Choose forms

  constructor(private httpServiceTableList: TableListService) {
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
      // @ts-ignore
      this.tableName = response;
    });
  }

  sendModalNameToGetData(model: RegisteredTable) {
    //  получаем имя таблицы , отправляем его на бек
    this.tableNameFromSelect = model;
    console.log(model.dynamic_model);
    this.httpServiceTableList.sendDynamicNameToGetDataService(model)
      .pipe(
        tap(() => {

        }),
        finalize(() => {
        })
      ).subscribe(response => {
      // @ts-ignore
      this.dynamicTableData = response;
    });

  }

//    button
  onRestoreButton() {
  }

}
