import { IProductQueryParameters } from '../Interfaces';
import { QueryParameters } from './QueryParameters';

export class ProductQueryParameters
  extends QueryParameters
  implements IProductQueryParameters {
  public set Name(value: string) {
    this.queryParams.add('Name', value);
  }

  public set Description(value: string) {
    this.queryParams.add('Description', value);
  }
  public set UPC(value: string) {
    this.queryParams.add('UPC', value);
  }

  public set MaxPrice(value: number) {
    this.queryParams.add('MaxPrice', value);
  }
  public set MinPrice(value: number) {
    this.queryParams.add('MinPrice', value);
  }
  public set ProductType(value: number) {
    this.queryParams.add('ProductType', value);
  }
  public set ProductBrand(value: number) {
    this.queryParams.add('ProductBrand', value);
  }
}
