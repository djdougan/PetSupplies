import { IProductBrand } from './IProductBrand';
import { IProductType } from './IProductType';
import { IBaseEntity } from './IBaseEntity';


export interface IProduct extends IBaseEntity {
  name: string;
  description: string;
  upc: string;
  netWeight: string;
  price: number;
  pictureUrl: string;
  productTypeId: number;
  productBrandId: number;
}
