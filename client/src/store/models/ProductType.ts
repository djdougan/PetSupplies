import { IProductType } from '../Interfaces/IProductType';
import { BaseEntity } from './BaseEntity';

export class ProductType extends BaseEntity implements IProductType {
  name: string;
  constructor(productType: IProductType) {
    super(productType.id);
    this.name = productType.name;
  }
}
