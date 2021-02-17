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
  public set ProductTypeId(value: number) {
    this.queryParams.add('ProductTypeId', value);
  }
  public set ProductBrandId(value: number) {
    this.queryParams.add('ProductBrandId', value);
  }
}
