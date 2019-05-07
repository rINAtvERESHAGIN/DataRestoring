import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Dictionary} from 'async';
import {MyModel} from '../modal/MyModel';
import {TableLIstModal} from '../modal/TableLIstModal';


export interface TableName extends Dictionary<AbstractControl> {
  tableNameFCN: AbstractControl;
}
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  tableName: MyModel[] = []; // будет хранить имена таблиц которые можно показать
  dynamicTableData: TableLIstModal[] = []; // будет хранить данные которые приходят от динамической таблицы
  selectedObjectToRestore: TableLIstModal[] = [];

  // Choose forms
  cFG: FormGroup;
  tableNameFC: FormControl = new FormControl();

  constructor(private builder: FormBuilder) {
    this.cFG = this.builder.group({
      tableNameFCN: this.tableNameFC,
    } as TableName);
  }

  ngOnInit() {
  }

//    button
  onRestoreButton() {
  }

}
