import { IQueryParameters } from '../Interfaces';
import Dictionary from './IDictionary';


export class QueryParameters implements IQueryParameters {
  protected queryParams = new Dictionary<string | number>();
  protected urlSearchParams= URLSearchParams;

  constructor() {
    this.queryParams.add('MaxSize', 100);
    this.queryParams.add('Page', 1);
    this.queryParams.add('Size', 50);
    this.queryParams.add('SortBy', 'id');
    this.queryParams.add('SortOrder', 'asc');
  }
  public set MaxSize(value: number) {
    this.queryParams.add('MaxSize', value);
  }
  public set Page(value: number) {
    this.queryParams.add('Page', value);
  }
  public set Size(value: number) {
    this.queryParams.add('Size', value);
  }
  public set SortBy(value: string) {
    this.queryParams.add('SortBy', value);
  }

  public set SortOrder(value: string) {
    this.queryParams.add('SortOrder', value);
  }

  public QueryString(): string {
    const urlSearchParams = new URLSearchParams();
    this.queryParams.getKeys().forEach((x) => {
      urlSearchParams.append(x, this.queryParams.getItem(x).toString());
    });
    return urlSearchParams.toString();
  }
}
