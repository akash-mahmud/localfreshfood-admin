export interface IMainCategory {
  updatedAt: string;
  // [x: string]: ReactNode; //In this way we can basically add signature for dynamic type
  name: string;
  pageTitle: string;
  pageDesc: string;
  tags: string;
  createdAt: string;
  id: string;
}

export interface IMainCategoryInput {

  
  name: string;
  pageTitle: string;
  pageDesc: string;
  tags: string;

}
export interface IMainCategoryResponsce {
  message: string;
  paginatedData: {
    currentPage: number;
    totalItems: number;
    totalPages: number;
    mainCategories: IMainCategory[];
  };
}
