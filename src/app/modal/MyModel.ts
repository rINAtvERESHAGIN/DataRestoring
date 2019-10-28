import {Type} from 'class-transformer';
import {RegisteredTable} from './registered_table';

export class MyModel {
  id: number;
  instance: string;
  models: RegisteredTable[];
}
