import { IProductBrand } from './../Interfaces/IProductBrand';
import { BaseEntity } from './BaseEntity';

export class ProductBrand extends BaseEntity implements IProductBrand{
    name: string;
    constructor(productBrand: IProductBrand){
        super(productBrand.id);
        this.name = productBrand.name;
    }
}