import { ICategory } from './../interface/Catgory';


export interface categoryStrore {
  category: [] | ICategory[];
  loading: boolean;
  hasMore: boolean;
  setLoading: (data: boolean) => void;
  getCategory: (page: number) => void;
}


