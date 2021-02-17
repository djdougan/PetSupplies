import { IProduct } from '../Interfaces/IProduct';
import { BaseEntity } from './BaseEntity';
import { IProductBrand } from '../Interfaces/IProductBrand';
import { IProductType } from '../Interfaces/IProductType';

export class Product extends BaseEntity implements IProduct{
    name: string;
    description: string;
    upc: string;
    netWeight: string;
    pictureUrl: string;
    price: number;
    productTypeId: number;
    productBrandId: number;
    constructor(product: IProduct ){
        super(product.id);
        this.name = product.name;
        this.description = product.description;
        this.upc = product.upc;
        this.netWeight = product.pictureUrl;
        this.pictureUrl = product.pictureUrl;
        this.price = product.price;
        this.productTypeId = product.productTypeId;
        this.productBrandId = product.productBrandId;
    }
}