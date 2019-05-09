import {Type} from 'class-transformer';
import {v4 as uuid} from 'uuid';

export class TableLIstModal {
        id: number;
        field: string;
        data: string;
        previous: string;
        @Type(() => Date)
        changed: Date;
        @Type(() => Date)
        logged: Date;
        object_uuid: uuid;
}
