import { IMainCategory } from "../interface/MainCategoryInterface";

export interface mainCategoryStrore {
  mainCategory: [] | IMainCategory[];
  loading: boolean;
  hasMore: boolean;
  setLoading: (data: boolean) => void;
  getMainCategory: (page: number) => void;
}
