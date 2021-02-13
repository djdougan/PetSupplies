import { IQueryParameters } from './IQueryParameters';
export interface IProductQueryParameters extends IQueryParameters {
  Name: string|null;
  Description: string|null;
  UPC: string|null;
  MinPrice: number|null;
  MaxPrice: number|null;
  ProductType: number|null;
  ProductBrand: number|null;
}
