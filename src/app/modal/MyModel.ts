import {Type} from 'class-transformer';

export class MyModel {
    id: number;
    @Type(() => Date)
    _modified: Date;
    name: string;
}
