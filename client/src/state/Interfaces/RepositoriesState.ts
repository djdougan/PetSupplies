import { IProduct } from './IProduct';

export interface RepositoriesState {
  data: IProduct[];
  loading: boolean;
  error: string | null;
}
