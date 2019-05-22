import {Type} from 'class-transformer';

export class Cards {
  restored: number;
  logging: number;
  tables: number;
  @Type(() => Date)
  changed: Date;
  type_of: string;
  data: string;
}
