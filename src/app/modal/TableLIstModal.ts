import {Type} from 'class-transformer';
import {v4 as uuid} from 'uuid';
// import {v4} from 'uuid';
export class TableLIstModal {
        field: string;
        data: string;
        previous: string;
        @Type(() => Date)
        changed: Date;
        @Type(() => Date)
        logged: Date;
        object_uuid: uuid;
}
