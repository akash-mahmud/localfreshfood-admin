import { ICategory } from './../interface/Catgory';
export default interface Category extends ICategory{

}

export interface categoryStrore {
  category: [] | Category;
  loading: boolean;
  setLoading: (data: boolean) => void;
  setCategory: (data: Category | []) => void;
}


