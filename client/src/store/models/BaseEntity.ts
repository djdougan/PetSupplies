import { IBaseEntity } from './../Interfaces/IBaseEntity';

export class BaseEntity implements IBaseEntity{
    id: number;
    constructor(id:number){
        this.id = id;
    }
}