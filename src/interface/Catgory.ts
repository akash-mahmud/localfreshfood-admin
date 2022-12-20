
export interface ICategory {
  updatedAt: string;
  // [x: string]: ReactNode; //In this way we can basically add signature for dynamic type
  name: string;
  pageTitle: string;
  pageDesc: string;
  tags: string;
  createdAt: string;
  id:string
}

export interface ICategoryInput {

  
  name: string;
  pageTitle: string;
  pageDesc: string;
  tags: string;

}
export interface ICategoryResponsce {
  message: string;
  paginatedData: {
    currentPage: number;
    totalItems: number;
    totalPages: number;
    categories:ICategory[];
  };
}