import {v4 as uuid} from 'uuid';

export class RegisteredTable {
  id: number;
  dynamic_model: string;
  token: uuid;
  instance: number;
  model: string;
}
